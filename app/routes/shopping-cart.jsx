import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
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
  const [total, setTotal] = useState(0);
  const { shoppingCart, updateAmount, deleteGuitar } = useOutletContext();

  useEffect(() => {
    const totalAmount = shoppingCart.reduce(
      (acc, product) => acc + product.amount * product.price,
      0
    );
    setTotal(totalAmount);
  }, [shoppingCart]);

  return (
    <main className="contenedor carrito">
      <ClientOnly
        fallback={
          <div className="contenedor fallback">
            <p>Cargando carrito...</p>
          </div>
        }
      >
        {() => (
          <>
            <h1 className="heading">Carrito de Compras</h1>
            <div className="contenido">
              <div className="carrito">
                <h2>Artículos</h2>
                {shoppingCart.length === 0
                  ? "Carrito Vacío"
                  : shoppingCart.map((product) => (
                      <div key={product.id} className="producto">
                        <div>
                          <img
                            src={product.image}
                            alt={`${product.name} Guitar`}
                          />
                        </div>
                        <div>
                          <p className="nombre">{product.name}</p>
                          <p>Cantidad:</p>
                          <select
                            value={product.amount}
                            className="select"
                            onChange={(e) =>
                              updateAmount({
                                amount: Number(e.target.value),
                                id: product.id,
                              })
                            }
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                          <p className="precio">
                            $ <span>{product.price}</span>
                          </p>
                          <p className="subtotal">
                            Subtotal: $
                            <span>{product.price * product.amount}</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          className="btn-eliminar"
                          onClick={() => deleteGuitar(product.id)}
                        >
                          x
                        </button>
                      </div>
                    ))}
              </div>
              <aside className="resumen">
                <h3>Resumen del Pedido</h3>
                <p>Total a pagar: ${total}</p>
              </aside>
            </div>
          </>
        )}
      </ClientOnly>
    </main>
  );
};

export default ShoppingCart;
