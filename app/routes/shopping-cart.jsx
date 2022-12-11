import { useOutletContext } from "@remix-run/react";
import styles from "~/styles/shopping-cart.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return {
    title: "Guitar LA - Carrito de Compras",
    description: "Venta de guitarras, música, blog, carrito de compras, tienda",
  };
}

const ShoppingCart = () => {
  const { shoppingCart } = useOutletContext();

  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2>Artículos</h2>
          {shoppingCart.length === 0
            ? "Carrito Vacío"
            : shoppingCart.map((product) => (
                <div key={product.id} className="producto">
                  <div>
                    <img src={product.image} alt={`${product.name} Guitar`} />
                  </div>
                  <div>
                    <p className="nombre">{product.name}</p>
                    <p>Cantidad: {product.amount}</p>

                    <p className="precio">
                      $ <span>{product.price}</span>
                    </p>
                    <p className="subtotal">
                      Subtotal: $<span>{product.price * product.amount}</span>
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar:$</p>
        </aside>
      </div>
    </main>
  );
};

export default ShoppingCart;
