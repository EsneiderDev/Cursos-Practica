# API

Base URL por defecto: `http://localhost:3000`.

Todas las respuestas de error tienen la forma `{ "message": string }`.

| Método | Ruta         | Descripción              | Éxito | Errores |
|--------|--------------|---------------------------|-------|---------|
| GET    | `/users`     | Lista todos los usuarios  | 200   | —       |
| GET    | `/users/:id` | Obtiene un usuario por id | 200   | 400 id inválido · 404 no existe |
| POST   | `/users`     | Crea un usuario           | 201   | 400 datos inválidos |
| PUT    | `/users/:id` | Edita un usuario          | 204   | 400 datos inválidos |
| DELETE | `/users/:id` | Elimina un usuario        | 204   | 400 id inválido |

## Modelo `User`

| Campo       | Tipo   | Validación                                |
|-------------|--------|--------------------------------------------|
| `id`        | string | mínimo 5 caracteres                        |
| `name`      | string | mínimo 3 caracteres                        |
| `email`     | string | debe contener `@` y `.`                    |
| `createdAt` | string (ISO date) | no puede ser una fecha futura   |

## Ejemplos

Crear un usuario:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"id":"abcde12345","name":"Esneider","email":"esneider@example.com","createdAt":"2024-01-01"}'
```

Listar usuarios:

```bash
curl http://localhost:3000/users
```

Editar un usuario (el `id` de la URL y el del body deben coincidir con un
usuario existente):

```bash
curl -X PUT http://localhost:3000/users/abcde12345 \
  -H "Content-Type: application/json" \
  -d '{"id":"abcde12345","name":"Esneider B","email":"eb@example.com","createdAt":"2024-01-01"}'
```

Eliminar un usuario:

```bash
curl -X DELETE http://localhost:3000/users/abcde12345
```
