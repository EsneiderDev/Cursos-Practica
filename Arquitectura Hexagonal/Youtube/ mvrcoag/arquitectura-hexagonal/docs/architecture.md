# Arquitectura

El código sigue una arquitectura hexagonal (ports & adapters), organizada por
módulo de negocio. Hoy solo existe el módulo `User`
(`src/lib/User`), más un módulo `Shared` para piezas transversales.

Cada módulo se divide en tres capas:

```
src/lib/User/
├── domain/          entidad, value objects, puerto del repositorio, errores
├── application/     un caso de uso por carpeta (Create, Edit, Delete, GetAll, GetOneById)
└── infrastructure/  adaptadores: controlador Express, repos en memoria y Postgres
```

## domain/

- `User`: entidad agregada, compuesta por value objects.
- `UserId`, `UserName`, `UserEmail`, `UserCreatedAt`: value objects que
  validan sus propias invariantes en el constructor (p. ej. `UserEmail` exige
  `@` y `.`, `UserId` exige al menos 5 caracteres). Si la invariante no se
  cumple, lanzan un `Error` estándar de JavaScript.
- `UserRepository`: interfaz (puerto) que define cómo se persiste un `User`,
  sin saber nada de la tecnología de persistencia.
- `UserNotFoundError`: error de dominio para búsquedas fallidas.

El dominio no importa nada de `application` ni de `infrastructure`: es la
única capa sin dependencias hacia afuera.

## application/

Cada caso de uso es una clase con un único método `run(...)` y recibe el
`UserRepository` por constructor (inyección de dependencias manual). No sabe
si el repositorio es en memoria, Postgres, o cualquier otro adaptador — solo
conoce el puerto definido en `domain/UserRepository.ts`.

## infrastructure/

Adaptadores concretos de los puertos del dominio:

- `ExpressUserController`: adaptador de entrada (driving adapter). Traduce
  peticiones HTTP a llamadas a los casos de uso y sus resultados a
  respuestas HTTP. También traduce errores de dominio a códigos HTTP:
  `UserNotFoundError` → 404, cualquier otro `Error` (p. ej. una validación de
  value object) → 400.
- `InMemoryUserRepository`: adaptador de salida (driven adapter) que guarda
  los `User` en un array en memoria. Útil para desarrollo/tests, no persiste
  entre reinicios.
- `PostgresUserRepository`: adaptador de salida que persiste en una tabla
  `users` de PostgreSQL usando `pg`.

## Composición

`src/lib/Shared/infrastructure/ServiceContainer.ts` es donde se conectan las
capas: instancia el repositorio concreto (hoy, `InMemoryUserRepository`) y
construye cada caso de uso con esa instancia. `src/main.ts` monta el
servidor Express, registra las rutas contra `ExpressUserController` y arranca
el proceso. Cambiar de repositorio en memoria a Postgres solo implica tocar
`ServiceContainer` — ni los casos de uso ni el controlador cambian.
