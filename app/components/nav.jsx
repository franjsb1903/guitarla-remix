import { Link, useLocation } from "@remix-run/react";
import shoppingCart from "../../public/img/carrito.png";

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" ? "active" : ""}
      >
        Nosotros
      </Link>
      <Link
        to="/guitars"
        className={location.pathname === "/guitars" ? "active" : ""}
      >
        Tienda
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog
      </Link>
      <Link to="/shopping-cart">
        <img src={shoppingCart} alt="Shopping Cart" />
      </Link>
    </nav>
  );
};

export default Nav;
