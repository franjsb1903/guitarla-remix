# GuitarLA - Remix

Aplicación de venta de guitarras, con blog propio. Este proyecto se alimenta de una API empleando Strapi y almacenando la información en una base de datos PostgreSQL.

Está realizado empleando Remix Run, un framework para la aplicación del SSR con React.

## Tecnologías

### Frontend

La aplicación ha sido creada con las siguientes tecnologías:

- **ReactJS**
- **CSS**
- **ViteJS**
- **JavaScript**
- **Remix Run**

### Backend

- **Strapi**

## Almacenamiento de datos

El almacenamiento de datos se lleva a cabo en una base de datos PostgreSQL desplegada en render.com, con la cual se comunica la API de Strapi.

## Despliegue local

Para un despliegue local de la aplicación, simplemente clona el repositorio y en primer lugar instala los paquetes:

```bash
npm install
```

Seguidamente, levanta la aplicación con:

```bash
npm run start
```

Podrás acceder a la aplicación en tu navegador accediento a [http://localhost:3000](http://localhost:3000).

Recuerda que esta aplicación **requiere de una comunicación con una API**, construida en este caso con Strapi. Si estás interesado realmente en emplearlo localmente, tendrás que contar con una API. Puedes ponerte en contacto conmigo si quieres una mano.
