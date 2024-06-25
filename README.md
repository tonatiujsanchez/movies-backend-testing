# MOVIES API + TESTING

Este proyecto es una API RESTful para una aplicación de películas que permite gestionar géneros, actores, directores y películas a través de varios endpoints a los cuales a todos se le implemento testing son Jest y Supertest.

[![API de Películas](/public/movies_api.webp)](https://movies-ts.netlify.app)

## Descripción

Endpoints a los cuales de le implementaron testing:

### movies
- **GET /movies**: Obtiene todos las películas.
- **POST /movies**: Crea una nueva película.
- **GET /movies/:id**: Obtiene una película por ID.
- **PUT /movies/:id**: Actualiza una película por ID.
- **DELETE /movies/:id**: Elimina una película por ID.
- **POST /movies/:id/actors**: Asignar actores a una película.
- **POST /movies/:id/directors**: Asignar directores a una película.
- **POST /movies/:id/genres**: Asignar géneros a una película.

### genres
- **GET /genres**: Obtiene todos los géneros.
- **POST /genres**: Crea un nuevo género.
- **GET /genres/:id**: Obtiene un género por ID.
- **PUT /genres/:id**: Actualiza un género por ID.
- **DELETE /genres/:id**: Elimina un género por ID.

### actors
- **GET /actors**: Obtiene todos los actores.
- **POST /actors**: Crea un nuevo actor.
- **GET /actors/:id**: Obtiene un actor por ID.
- **PUT /actors/:id**: Actualiza un actor por ID.
- **DELETE /actors/:id**: Elimina un actor por ID.

### directors
- **GET /actors**: Obtiene todos los directores.
- **POST /actors**: Crea un nuevo director.
- **GET /actors/:id**: Obtiene un director por ID.
- **PUT /actors/:id**: Actualiza un director por ID.
- **DELETE /actors/:id**: Elimina un director por ID.

## Tecnologías Utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize
- jest
- supertest

## Ejecución local y testing

__Requisitos Previos__

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:** Ejecuta el siguiente comando en tu terminal para clonar este repositorio en tu máquina local:
```
git clone https://github.com/tonatiujsanchez/movies-backend-testing.git
```

2. **Abre el proyecto:** Navega hasta la carpeta del proyecto clonado
```
cd movies-backend-testing
```

3. **Instala la dependencias:** Ejecuta el siguiente comando para instalar los node_modules:
```
npm install
```

4. **Crea la base de datos:**

    - Inicia con postgresSQL ejecutando el siguiente comando
    ```
    psql -U postgres
    ```
    - Crea la base de datos user_db
    ```
    CREATE DATABASE movies_db;
    ```

5. **Ingresa las variables de entorno:** Modifica en archivo .env.example a .env y agrega la siguiente variable de entorno con los valores correspondientes de la base de datos:
```
DATABASE_URL=postgres://postgres:<password>@127.0.0.1:5432/<nombre_db>
```

6. **Corre el proyecto:** Ejecuta el siguiente comando para correr el servidor de Node.js de modo desarrollo:
```
npm run dev
```

**Para ejecutar los tests:** Termina el servidor local y ejecuta el siguiente comando
```
npm run test
```



## Contribución

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir una __issue__ para discutir nuevas características o problemas, o enviar un __pull request__ con tus mejoras propuestas.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme en https://tsx-dev.netlify.app/#contacto.

¡Gracias por visitar este proyecto! Espero que disfrutes explorando mi trabajo. 🤗