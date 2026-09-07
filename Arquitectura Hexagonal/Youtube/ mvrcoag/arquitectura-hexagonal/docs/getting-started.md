# Getting started

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Desarrollo

Levanta el servidor con recarga automática (usa `ts-node-dev`, no requiere
compilar antes):

```bash
npm run dev
```

## Compilar y ejecutar en producción

```bash
npm run build   # compila src/ -> dist/ con tsc
npm start        # ejecuta dist/main.js con node
```

Por defecto el servidor escucha en `http://localhost:3000` (configurable con
la variable de entorno `PORT`).

## Base de datos

`ServiceContainer` (`src/lib/Shared/infrastructure/ServiceContainer.ts`) usa
`PostgresUserRepository` cuando la variable de entorno `DATABASE_URL` está
definida, y cae a `InMemoryUserRepository` (sin persistencia entre
reinicios) si no lo está.

Para levantar un PostgreSQL local con la tabla `users` ya creada:

```bash
docker compose up -d db
```

El servicio queda expuesto en `localhost:5433` (se usa ese puerto en lugar
del 5432 por defecto para no chocar con un PostgreSQL que ya esté corriendo
en la máquina). La tabla se crea automáticamente la primera vez a partir de
`db/migrations/001_create_users_table.sql`, montado como script de
inicialización de la imagen oficial de Postgres.

Copia `.env.example` a `.env` (o exporta las variables manualmente) y luego
exporta `DATABASE_URL` antes de arrancar la app:

```bash
export DATABASE_URL=postgres://hexagonal:hexagonal@localhost:5433/hexagonal
npm run dev
```

> `created_at` es `TIMESTAMPTZ` (con zona horaria), no `TIMESTAMP`. Es
> importante: si el proceso de Node y el servidor de Postgres corren en
> zonas horarias distintas (típico si Postgres corre en un contenedor en
> UTC), un `TIMESTAMP` sin zona horaria se interpreta mal al leerlo y puede
> parecer una fecha futura, lo que dispara la validación de
> `UserCreatedAt`.

Si necesitas agregar más tablas o cambios de esquema, añade un nuevo archivo
`db/migrations/00N_*.sql` — los scripts en `db/migrations` se ejecutan en
orden alfabético solo la primera vez que se crea el volumen de datos. Para
aplicar un archivo nuevo sobre una base ya existente, ejecútalo a mano:

```bash
docker compose exec -T db psql -U hexagonal -d hexagonal < db/migrations/00N_nombre.sql
```
