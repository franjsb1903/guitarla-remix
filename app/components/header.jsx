import { Link } from "@remix-run/react";
import Nav from "./nav";
import logo from "../../public/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/" className="logo">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
