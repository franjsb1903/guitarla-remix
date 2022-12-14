import { useState, useEffect } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

export const meta = () => {
  return {
    charset: "utf-8",
    title: "GuitarLA",
    viewport: "width=device-width,initial-scale=1",
  };
};

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&family=Roboto:wght@300;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function App() {
  const shoppingCartLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("shopping-cart")) ?? []
      : [];
  const [shoppingCart, setShoppingCart] = useState(shoppingCartLS);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const addItem = (item) => {
    const guitarExists = shoppingCart.find((guitar) => guitar.id === item.id);
    if (guitarExists) {
      const newShoppingCart = shoppingCart.map((guitar) => {
        if (guitar.id === item.id) {
          guitar.amount += item.amount;
        }
        return guitar;
      });
      setShoppingCart(newShoppingCart);
      return;
    }

    setShoppingCart([...shoppingCart, item]);
  };

  const updateAmount = (item) => {
    const newShoppingCart = shoppingCart.map((guitar) => {
      if (guitar.id === item.id) {
        guitar.amount = item.amount;
      }
      return guitar;
    });
    setShoppingCart(newShoppingCart);
  };

  const deleteGuitar = (id) => {
    setShoppingCart(shoppingCart.filter((guitar) => guitar.id !== id));
  };

  return (
    <Document>
      <Outlet
        context={{
          addItem,
          shoppingCart,
          updateAmount,
          deleteGuitar,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/** Manejo de errores */

export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <div className="error-container">
        <p className="error-status">{error.status}</p>
        <p className="error-text">{error.statusText}</p>
        <Link to="/">Volver a la p??gina principal</Link>
      </div>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <div className="error-container">
        <p className="error-status">{error.status}</p>
        <p className="error-text">{error.statusText}</p>
        <Link to="/">Volver a la p??gina principal</Link>
      </div>
    </Document>
  );
}
