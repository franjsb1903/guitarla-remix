import { Link } from "@remix-run/react";

const Guitar = ({ guitar }) => {
  const { description, name, price, image, url } = guitar;

  return (
    <div className="guitarra">
      <img
        src={image.data.attributes.formats.medium.url}
        alt={`Guitar ${name}`}
      />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="descripcion">{description}</p>
        <p className="precio">${price}</p>

        <Link className="enlace" to={`/guitars/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
