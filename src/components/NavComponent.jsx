import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/img/home.png";
import provider from "../assets/img/provider.png";
import product from "../assets/img/product.png";
import sales from "../assets/img/sales.png";
import report from "../assets/img/report.png";
const NavComponent = () => {
  return (
    <>
      <header>
        <nav>
          <div className="text-center">
            {/* <Link to="/">
          <img src={home} alt="home" />
          <h5>Inicio</h5>
        </Link> */}
            <Link to="/proveedores">
              <img src={provider} alt="provider" />
              <h5>Proveedores</h5>
            </Link>
            <Link to="/productos">
              <img src={product} alt="product" />
              <h5>Productos</h5>
            </Link>
            <Link to="/ventas">
              <img src={sales} alt="sales" />
              <h5>Ventas</h5>
            </Link>
            <Link to="/informes">
              <img src={report} alt="report" />
              <h5>Informes</h5>
            </Link>
          </div>
          {/* <Link to="/">Inicio</Link>
          <Link to="/proveedores">Proveedores</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/ventas">Ventas</Link>
          <Link to="/informes">Informes</Link> */}
        </nav>
      </header>
    </>
  );
};

export default NavComponent;
