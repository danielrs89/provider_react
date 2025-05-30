import loadLogo from "../assets/img/load.png";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  cons
  return (
    <>
      {/* cabecera */}
      <div className="d-flex align-items-center gap-4">
        <Link to={"/"}>
          <img src={loadLogo} alt="loadLogo" />
        </Link>
        <div className="d-flex flex-column justify-content-center">
          <h1>Productos</h1>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
