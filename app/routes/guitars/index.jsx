import { useLoaderData } from "@remix-run/react";
import GuitarsList from "~/components/guitars-list";
import { getGuitars } from "~/models/guitars.server";

export const meta = () => {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarLA - Nuestra colección de guitarras",
  };
};

export const loader = async () => {
  const guitars = await getGuitars();

  return guitars;
};

const Tienda = () => {
  const guitars = useLoaderData();

  return <GuitarsList guitars={guitars} />;
};

export default Tienda;
