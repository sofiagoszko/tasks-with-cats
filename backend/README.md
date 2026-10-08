# Backend - API de tareas

API REST hecha con **Express** y **TypeScript**. Las tareas se guardan en un array en memoria, así que se pierden cada vez que se reinicia el servidor.

## Estructura

```
backend/
├── src/
│   ├── server.ts         Configuración de Express (cors, JSON) y arranque del servidor
│   └── routes/
│       └── tasks.ts      Rutas de /api/tasks, validaciones y almacenamiento en memoria
├── package.json
└── tsconfig.json
```

## Variables de entorno

Crear un archivo `.env` en esta carpeta (se puede copiar de `.env.example`):

```
PORT=8080
```

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `PORT`   | Puerto en el que escucha la API | `8080` |

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala las dependencias |
| `npm run dev` | Levanta la API en modo desarrollo con nodemon + ts-node (se reinicia al cambiar archivos de `src`) |
| `npm run build` | Compila TypeScript con `tsc` |
| `npm start` | Ejecuta la versión compilada (`dist/server.js`) |

## Modelo de tarea

```ts
interface Task {
  id: string;          // UUID generado por el servidor
  title: string;
  description: string;
  complete: boolean;   // false = Abierta, true = Finalizada
  createdAt: Date;
}
```

## Endpoints

URL base: `http://localhost:<PORT>/api/tasks`

### `GET /api/tasks`
Devuelve todas las tareas. Acepta un filtro opcional por estado:

| Query param | Valores | Descripción |
|-------------|---------|-------------|
| `status` | `Abierta` \| `Finalizada` | Devuelve solo las tareas abiertas o finalizadas. Sin el parámetro devuelve todas. |

Ejemplo: `GET /api/tasks?status=Abierta`

Respuesta `200`: array de tareas.

### `GET /api/tasks/:id`
Devuelve una tarea por su id.

- `200`: la tarea.
- `404`: `{ "error": "No se encontró la tarea buscada" }`

### `POST /api/tasks`
Crea una tarea nueva. Body:

```json
{
  "title": "Comprar pan",
  "description": "Ir a la panadería antes de las 20hs"
}
```

- `201`: la tarea creada (con `complete: false`).
- `400`: si falta el título o la descripción (o están vacíos):

```json
{
  "errors": {
    "title": "Por favor ingrese un titulo válido",
    "description": "Por favor ingrese una descripción válida"
  }
}
```

### `PUT /api/tasks/:id`
Actualiza el título y la descripción de una tarea. Recibe el mismo body que `POST` y aplica las mismas validaciones (los dos campos son obligatorios).

- `200`: la tarea actualizada.
- `400`: si falta el título o la descripción (mismo formato de `errors` que en `POST`).
- `404`: `{ "error": "No se encontró la tarea buscada" }`

### `DELETE /api/tasks/:id`
**No elimina la tarea:** alterna su estado entre *Abierta* y *Finalizada* (`complete = !complete`). Es lo que usa el botón **Finalizar / Activar** del frontend.

- `200`: la tarea con su nuevo estado.
- `404`: `{ "error": "No se encontró la tarea buscada" }`
