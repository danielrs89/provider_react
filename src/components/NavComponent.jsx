import { Link } from "react-router-dom";
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
        </nav>
      </header>
    </>
  );
};

export default NavComponent;
