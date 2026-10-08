# Challenge ingreso a Academia ForIT 2025

Aplicación de lista de tareas con un backend en **Express + TypeScript** y un frontend en **React + Vite + TypeScript**.

## Objetivo
Crear una aplicación básica de lista de tareas que demuestre conocimientos fundamentales de Git, JavaScript, Node.js y React.

## Requisitos
- Crear un repositorio público en GitHub (o similar) para el proyecto
- Crear una carpeta para el backend
- Crear carpeta para el frontend
- Crear un servidor básico con Express
- Implementar los siguientes endpoints:
    - GET /api/tasks - Obtener todas las tareas
    - POST /api/tasks - Crear una nueva tarea
    - PUT /api/tasks/:id - Actualizar una tarea existente
    - DELETE /api/tasks/:id - Eliminar una tarea
- Usar un array en memoria como almacenamiento temporal
- Implementar manejo básico de errores
- Crear una aplicación de React con Vite (o similar)
- Implementar los siguientes páginas/componentes (usando algún router):
    - TaskList - Muestra la lista de tareas
    - TaskItem - Muestra una tarea individual
    - TaskForm - Formulario para crear/editar tareas
- Implementar llamadas a la API de express usando fetch
- Configurar variables de entorno tanto para la api como el frontend
- Usar CSS básico para darle estilo a la aplicación

## Estructura del proyecto

```
ForIT2025/
├── backend/    API REST con Express (ver backend/README.md)
├── frontend/   Aplicación React con Vite (ver frontend/README.md)
└── img/        Capturas de la aplicación funcionando
```

Cada carpeta tiene su propio README con más detalle:
- [Backend](./backend/README.md): endpoints, variables de entorno y scripts.
- [Frontend](./frontend/README.md): rutas, componentes, variables de entorno y scripts.

## Tecnologías
- **Backend:** Node.js, Express, TypeScript, uuid, dotenv, cors, nodemon
- **Frontend:** React 19, Vite, TypeScript, React Router, Bootstrap 5 (vía CDN), SweetAlert2

## Correr la aplicación por primera vez

1. Clonar el repositorio

2. En la carpeta `backend`, crear un archivo `.env` (se puede copiar de `.env.example`) con la variable:

```
PORT=8080
```

3. En la carpeta `frontend`, crear un archivo `.env` (se puede copiar de `.env.example`) con la URL de la API, usando el mismo puerto que el backend:

```
VITE_API_URL=http://localhost:8080/api
```

4. Desde una terminal, levantar el backend:

```
cd backend
npm install
npm run dev
```

5. Desde otra terminal, levantar el frontend:

```
cd frontend
npm install
npm run dev
```

6. Abrir en el navegador la URL que muestra Vite (por defecto http://localhost:5173).

## Correr la aplicación ya descargada

1. Desde una terminal

```
cd backend
npm run dev
```

2. Desde otra terminal

```
cd frontend
npm run dev
```

> Por el momento las tareas no se guardan en una base de datos, por lo que toda la información guardada se pierde al detener el backend.


## Aplicación andando

### Home
![Inicio](./img/Home.png)

### Listar tareas
![Listado de tareas](<./img/listado vacio-1.png>)

### Crear tarea
- Formulario para crear una tarea
![Creación de tarea](<./img/nueva tarea.png>)

- Validaciones en el frontend
![Validaciones frontend](<./img/validacion front.png>)

- Validaciones en el backend
![Validaciones backend](<./img/validacion back.png>)

- Mensaje de éxito
![Mensaje de éxito](<./img/nueva exito.png>)

- Listado de tareas con la nueva tarea creada
![Listado de tareas con la nueva tarea creada](<./img/listado con tarea.png>)

### Editar tarea
- Formulario para editar la tarea
![Formulario para editar la tarea](<./img/editar tarea.png>)

- Mensaje de éxito
![Mensaje de éxito](<./img/editar exito.png>)

- Listado de tareas con la tarea editada
![Listado de tareas con la tarea editada](<./img/tarea editada.png>)

### Visualizar una tarea
![Visualizar una tarea](<./img/Visulizar tarea.png>)

### Finalizar una tarea
- Pregunta antes de finalizar una tarea
![Pregunta antes de finalizar una tarea](<./img/Finalizar tarea.png>)

- Mensaje de éxito
![Mensaje de éxito](<./img/Finalizar exito.png>)

- Listado de tareas con la tarea finalizada
![Listado de tareas con la tarea finalizada](<./img/tarea finalizada.png>)

### Filtrar tareas

- Listado de tareas sin filtrar
![Listado de tareas sin filtrar](<./img/listado con tareas.png>)

- Tareas abiertas
![Tareas abiertas](./img/filtro1.png)

- Tareas finalizadas
![Tareas finalizadas](./img/filtro2.png)
