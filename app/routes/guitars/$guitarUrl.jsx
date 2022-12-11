import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
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
  const { addItem } = useOutletContext();
  const [amount, setAmount] = useState(0);

  const guitar = useLoaderData();
  const { name, description, image, price } = guitar.attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount < 1) {
      alert("Debes de seleccionar una cantidad");
      return;
    }

    const selected = {
      id: guitar.id,
      image: image.data.attributes.url,
      name,
      price,
      amount,
    };

    addItem(selected);
  };

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

        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="amount-select">Cantidad</label>
          <select
            id="amount-select"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Añadir al carrito" />
        </form>
      </div>
    </div>
  );
};

export default Guitar;
