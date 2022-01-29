import React from "react";
import { Link } from "react-router-dom";
import Navegation from "./Navegation.components";

const Header = props => {
  return (
    <header className="col-12">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand text-warning" to={'/'}>{props.title}</Link>
        <Navegation searchProduct={props.searchProduct}/>
      </nav>
    </header>
  );
};

export default Header;