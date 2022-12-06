import { useLoaderData } from "@remix-run/react";
import GuitarsList from "~/components/guitars-list";
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
      <GuitarsList guitars={guitars} />
    </div>
  );
};

export default Tienda;
