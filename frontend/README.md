# Frontend - Lista de tareas

Aplicación hecha con **React 19**, **Vite** y **TypeScript**. Consume la API del backend con `fetch`, usa **React Router** para la navegación, **Bootstrap 5** (cargado por CDN en `index.html`) para los estilos y **SweetAlert2** para los mensajes de confirmación y éxito.

## Estructura

```
frontend/
├── public/                    Imágenes estáticas (cat.jpg, task.png)
├── src/
│   ├── main.tsx               Punto de entrada
│   ├── App.tsx                Layout general y definición de rutas
│   ├── Home.tsx               Página de inicio
│   ├── Types.tsx              Tipo Task compartido
│   ├── App.css / index.css    Estilos
│   └── components/
│       ├── HeaderComponent.tsx  Barra de navegación
│       ├── FooterComponent.tsx  Pie de página
│       ├── TaskList.tsx         Listado de tareas, filtro por estado y botón Finalizar/Activar
│       ├── TaskItem.tsx         Detalle de una tarea
│       └── TaskForm.tsx         Formulario para crear y editar tareas
├── index.html
└── vite.config.ts
```

## Rutas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `Home` | Página de bienvenida |
| `/tasks` | `TaskList` | Listado de tareas con filtro (Todas / Abierta / Finalizada) |
| `/new-task` | `TaskForm` | Crear una tarea |
| `/edit-task/:id` | `TaskForm` | Editar una tarea existente |
| `/task/:id` | `TaskItem` | Ver el detalle de una tarea |

## Variables de entorno

Crear un archivo `.env` en esta carpeta (se puede copiar de `.env.example`):

```
VITE_API_URL=http://localhost:8080/api
```

| Variable | Descripción |
|----------|-------------|
| `VITE_API_URL` | URL base de la API, incluyendo `/api`. El puerto tiene que coincidir con el `PORT` del backend. |

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala las dependencias |
| `npm run dev` | Levanta el servidor de desarrollo de Vite (por defecto en http://localhost:5173) |
| `npm run build` | Chequea tipos y genera el build de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Corre ESLint |

> El backend tiene que estar corriendo para que la aplicación pueda listar, crear o editar tareas.
