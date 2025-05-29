import React from "react";
import loadLogo from "../assets/img/load.png";
import { Link } from "react-router-dom";

const ProvidersPage = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-4">
        <Link to={"/"}>
          <img src={loadLogo} alt="loadLogo" />
        </Link>
        <div className="d-flex flex-column justify-content-center">
          <h1>Proveedores</h1>
        </div>
      </div>
    </>
  );
};

export default ProvidersPage;
