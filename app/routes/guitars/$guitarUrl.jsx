import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

export const loader = async ({ params }) => {
  const { guitarUrl } = params;

  const data = await getGuitar(guitarUrl);

  if (data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }

  return data[0];
};

export const meta = ({ data }) => {
  if (!data) {
    return {
      title: "GuitarLA - Guitarra no encontrada",
      description: `Guitarras, venta de guitarras, guitarra no encontrada`,
    };
  }

  return {
    title: `GuitarLA - ${data.attributes.name}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.attributes.name}`,
  };
};

const Guitar = () => {
  const guitar = useLoaderData();

  const { name, description, image, price } = guitar.attributes;

  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={image.data.attributes.url}
        alt={`Guitar ${name}`}
      />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="texto">{description}</p>
        <p className="precio">${price}</p>
      </div>
    </div>
  );
};

export default Guitar;
