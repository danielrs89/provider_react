import NavComponent from "../components/NavComponent";
import loadLogo from "../assets/img/load.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-4">
        <Link to={"/"}>
          <img src={loadLogo} alt="loadLogo" />
        </Link>
        <div className="d-flex flex-column justify-content-center">
          <h1>Servicios para proveedes</h1>
          <p>
            Bienvenido/a aquí encontrás todo los relacionado con la gestión de
            tus negocios.
          </p>
        </div>
      </div>
      <NavComponent></NavComponent>
    </>
  );
};

export default HomePage;
