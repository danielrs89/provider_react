import { Link } from "react-router-dom";
import error from "../assets/img/error.png";

// Componente para manejar páginas de error o rutas no encontradas
function ErrorPage() {
  return (
    <>
      <h1>404 - Página no encontrada</h1>
      <br />
      <Link to={"/"}>
        <img src={error} alt="error" />
        <h2>Ir al inicio</h2>
      </Link>
    </>
  );
}

export default ErrorPage;
