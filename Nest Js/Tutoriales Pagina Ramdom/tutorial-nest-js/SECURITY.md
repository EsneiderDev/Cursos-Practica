# Medidas de seguridad del proyecto

Este documento registra todas las medidas de seguridad aplicadas al proyecto mediante pnpm y la configuración del ecosistema Node.js.

---

## Resumen de archivos modificados

| Archivo | Propósito |
|---|---|
| `.npmrc` | Configuración de seguridad de pnpm |
| `package.json` → campo `pnpm` | Restricciones de dependencias y scripts |
| `package.json` → `packageManager` | Versión fija del gestor de paquetes |
| `package.json` → `scripts` | Comandos de auditoría y CI |

---

## 1. `.npmrc` — Configuración de seguridad

### `strict-ssl=true`
Obliga a verificar el certificado SSL del registry en cada petición de red. Previene ataques Man-in-the-Middle (MITM) donde un intermediario malicioso podría inyectar paquetes alterados durante la descarga.

### `verify-store-integrity=true`
Después de descargar un paquete, pnpm verifica su checksum SHA-512 contra el hash registrado en `pnpm-lock.yaml`. Si el contenido del paquete fue alterado en el registry o en el store local, la instalación falla. Detecta tanto compromisos del supply chain como corrupción del cache.

### `audit=true`
Ejecuta `pnpm audit` automáticamente al final de cada `pnpm install`. Consulta la base de datos de advisories de npm (GHSA) y falla si hay vulnerabilidades conocidas en el árbol de dependencias. Sin esta opción, los CVEs pasan desapercibidos hasta que alguien los busca manualmente.

### `save-exact=true`
Cuando se instala un paquete nuevo con `pnpm add`, se guarda la versión exacta (`1.2.3`) en lugar de un rango (`^1.2.3`). Los rangos permiten que una actualización silenciosa en el registry instale una versión diferente a la que se probó. Las versiones exactas hacen que el `pnpm-lock.yaml` sea la única fuente de verdad para qué se instala.

### `registry=https://registry.npmjs.org/`
Declara el registry explícitamente. Sin esto, pnpm usa el registry configurado globalmente en la máquina del desarrollador, que podría apuntar a un mirror privado comprometido o a un registry corporativo desactualizado. Un registry explícito previene ataques de confusión de registry y resolución DNS manipulada.

### `minimum-release-age=1440`
pnpm se niega a instalar cualquier versión de un paquete publicada hace menos de 1440 minutos (24 horas). Mitiga:

- **Protestware**: mantenedores que publican versiones maliciosas en protesta y las retiran pocas horas después.
- **Typosquatting de ventana corta**: paquetes maliciosos publicados con nombres similares a populares, diseñados para ser instalados en las primeras horas antes de ser detectados.
- **Account hijacking**: si una cuenta de npm es comprometida y publica una versión maliciosa, el margen de 24 horas permite que la comunidad lo detecte y reporte antes de que llegue a los proyectos.

Aplica en `pnpm install` (cuando resuelve nuevas versiones) y en `pnpm update`. No aplica cuando se instala desde un lockfile congelado (`--frozen-lockfile`), porque las versiones ya están fijadas.

### `node-linker=isolated`
pnpm crea una estructura de `node_modules` donde cada paquete solo tiene acceso simbólico a sus dependencias declaradas. Si un paquete intenta hacer `require()` de algo que no declaró en su `package.json`, falla con un error de módulo no encontrado.

Con npm o yarn (estructura hoisted/plana), todos los paquetes comparten el mismo `node_modules` raíz y pueden acceder a dependencias de otros paquetes sin declararlas. Esas dependencias fantasma son un vector de ataque: un paquete malicioso puede leer módulos instalados por otros (como `dotenv` o clientes de base de datos) sin que el desarrollador lo sepa.

---

## 2. `package.json` — campo `pnpm`

### `pnpm.overrides` — Parche de vulnerabilidad crítica

```json
"overrides": {
  "class-validator": ">=0.14.0"
}
```

`class-validator` es una peer dependency opcional de `@nestjs/common`. La versión que pnpm resolvía (`0.13.2`) tiene una vulnerabilidad crítica:

- **CVE**: [GHSA-fj58-h2fr-3pp2](https://github.com/advisories/GHSA-fj58-h2fr-3pp2)
- **Severidad**: Crítica
- **Tipo**: SQL Injection y Cross-Site Scripting (XSS)
- **Versiones afectadas**: `< 0.14.0`
- **Versión instalada tras el parche**: `0.15.1`

Como `class-validator` no era una dependencia directa del proyecto, se declaró también en `dependencies` con `>=0.14.0` para forzar la resolución a una versión segura, y el `override` garantiza que ninguna dependencia transitiva pueda bajar a una versión vulnerable.

### `pnpm.onlyBuiltDependencies` — Whitelist de scripts de instalación

```json
"onlyBuiltDependencies": [
  "@nestjs/core",
  "unrs-resolver"
]
```

Por defecto, cualquier paquete puede ejecutar código arbitrario durante la instalación mediante los scripts `preinstall`, `install` y `postinstall`. Esta whitelist cambia el modelo a **deny-by-default**: solo los paquetes listados pueden ejecutar scripts al instalarse; todos los demás son bloqueados silenciosamente.

Paquetes autorizados y motivo:
- `@nestjs/core` — muestra el banner de OpenCollective (inofensivo)
- `unrs-resolver` — descarga binarios nativos mediante `napi-postinstall` (requerido para funcionar)

Paquetes bloqueados implícitamente:
- `@scarf/scarf` — paquete de telemetría incluido por alguna dependencia transitiva; no tiene razón legítima para ejecutar código en la máquina del desarrollador o servidor de CI

Esta configuración vive en `package.json` y aplica para todo el equipo y todos los entornos. A diferencia de `pnpm approve-builds` (que guarda los permisos en la configuración global del usuario), `onlyBuiltDependencies` es portable y versionada junto al código.

---

## 3. `package.json` — campo `packageManager`

```json
"packageManager": "pnpm@11.1.1"
```

Corepack (incluido en Node.js ≥16.9) lee este campo y verifica que el gestor de paquetes ejecutado coincida con la versión declarada. Esto previene:

- Usar `npm install` o `yarn` accidentalmente, que generarían un `package-lock.json` o `yarn.lock` paralelo con una resolución diferente y sin las restricciones de seguridad de este proyecto.
- Usar una versión distinta de pnpm con comportamientos de resolución o seguridad diferentes a los esperados.

Para activar la verificación estricta: `COREPACK_ENABLE_STRICT=1 pnpm install`.

---

## 4. `package.json` — Scripts de seguridad

### `pnpm run audit`
```
pnpm audit --prod
```
Audita solo las dependencias de producción (excluye devDependencies). Útil para evaluar el riesgo real en tiempo de ejecución sin ruido de herramientas de desarrollo.

### `pnpm run audit:all`
```
pnpm audit
```
Audita todas las dependencias, incluyendo devDependencies. Recomendado ejecutar periódicamente o en pre-commit.

### `pnpm run install:ci`
```
pnpm install --frozen-lockfile
```
Modo de instalación para CI/CD. Si `pnpm-lock.yaml` no está en sincronía exacta con `package.json`, la instalación falla en lugar de actualizar el lockfile silenciosamente. Garantiza que lo que se prueba en CI es exactamente lo que está versionado. Nunca debe usarse en desarrollo local cuando se están añadiendo dependencias.

---

## 5. `pnpm-lock.yaml` — Control del lockfile

El `pnpm-lock.yaml` **debe estar versionado en git** (no está en `.gitignore`). Es la única fuente de verdad sobre qué versión exacta de cada paquete y sus transitivas se instala. Sin él:

- Dos desarrolladores con `pnpm install` en fechas distintas pueden tener versiones diferentes.
- Una actualización silenciosa en el registry puede introducir código diferente al que se auditó.

En CI/CD usar siempre `pnpm run install:ci` (`--frozen-lockfile`) para que cualquier discrepancia entre `package.json` y el lockfile sea un error de build visible, no una actualización silenciosa.

---

## Resultado de auditoría tras aplicar todas las medidas

```
$ pnpm audit
No known vulnerabilities found
```

Vulnerabilidad resuelta:

| Paquete | Versión anterior | Versión actual | CVE | Severidad |
|---|---|---|---|---|
| `class-validator` | `0.13.2` | `0.15.1` | GHSA-fj58-h2fr-3pp2 | Crítica |
