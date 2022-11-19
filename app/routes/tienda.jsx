import { useLoaderData } from "@remix-run/react";
import Guitar from "~/components/guitar";
import { getGuitars } from "~/models/guitars.server";
import styles from "~/styles/guitars.css";

export const meta = () => {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarLA - Nuestra colección de guitarras",
  };
};

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export const loader = async () => {
  const guitars = await getGuitars();

  return guitars;
};

const Tienda = () => {
  const guitars = useLoaderData();

  return (
    <div className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      {guitars?.length && (
        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Guitar guitar={guitar?.attributes} key={guitar?.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tienda;
