import image from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export const meta = () => {
  return {
    title: "GuitarLA - Nosotros",
    description: "Venta de guitarras, blog de música",
  };
};

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: image,
      as: "image",
    },
  ];
};

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={image} alt="Nosotros" />
        <div>
          <p>
            Suspendisse potenti. Donec ex risus, lacinia vitae fermentum
            pellentesque, volutpat nec sem. Cras eu odio eu magna sagittis
            efficitur. Maecenas iaculis tellus sagittis tempor ullamcorper.
            Morbi et quam rhoncus, mollis eros vitae, interdum eros. Ut eget
            lectus viverra metus posuere ultricies eget a metus. Cras bibendum
            dolor varius tristique lacinia. Phasellus non malesuada lectus.
            Aliquam quis nibh sed ex venenatis ornare et quis eros. Fusce
            fermentum condimentum mollis. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Sed eu nisl
            ut libero ullamcorper aliquam. Fusce rutrum, metus at sagittis
            lacinia, dolor nunc fermentum mauris, ut iaculis odio nisi semper
            enim.
          </p>
          <p>
            Suspendisse potenti. Donec ex risus, lacinia vitae fermentum
            pellentesque, volutpat nec sem. Cras eu odio eu magna sagittis
            efficitur. Maecenas iaculis tellus sagittis tempor ullamcorper.
            Morbi et quam rhoncus, mollis eros vitae, interdum eros. Ut eget
            lectus viverra metus posuere ultricies eget a metus. Cras bibendum
            dolor varius tristique lacinia. Phasellus non malesuada lectus.
            Aliquam quis nibh sed ex venenatis ornare et quis eros. Fusce
            fermentum condimentum mollis. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Sed eu nisl
            ut libero ullamcorper aliquam. Fusce rutrum, metus at sagittis
            lacinia, dolor nunc fermentum mauris, ut iaculis odio nisi semper
            enim.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
