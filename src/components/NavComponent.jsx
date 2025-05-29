import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/proveedores">Proveedores</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/ventas">Ventas</Link>
          <Link to="/informes">Informes</Link>
        </nav>
      </header>
    </>
  );
};

export default NavComponent;
