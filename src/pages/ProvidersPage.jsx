import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { ProviderContext } from "../contexts/provider.context";

import loadLogo from "../assets/img/load.png";
import edit from "../assets/img/edit.png";
import deleteIMG from "../assets/img/delete.png";
import mail from "../assets/img/mail.png";
import wasap from "../assets/img/wasap.png";

const ProvidersPage = () => {
  const { provider, error, getProviders, deleteProvider } =
    useContext(ProviderContext);

  useEffect(() => {
    getProviders();
  }, []); // Dependencias vacías: solo se ejecuta una vez al montar el componente

  // ***gestionar borrado
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres borrar este proveedor?"
    );
    if (confirmDelete) {
      await deleteProvider(id); // espera a que finalice
      alert("Proveedor eliminado correctamente.");
      getProviders(); // vuelve a cargar la lista actualizada
      console.log("DELETE");
    }
  };

  const HTMLGetProviders = provider.map((provider, index) => {
    return (
      <article key={index}>
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            {/* <h5 className="m-0">{provider.name_provider}</h5> */}
            <h5 className="m-0">{provider?.name_provider}</h5>

            {/* // Botones de acción    */}
            <div className="d-flex gap-2">
              <Link to={`/proveedores/editar/${provider?.id_provider}`}>
                <img
                  src={edit}
                  alt="editar"
                  style={{ width: "16px", height: "16px" }}
                />
              </Link>
              <i style={{ cursor: "pointer" }}>
                <img
                  src={deleteIMG}
                  alt="borrar"
                  style={{ width: "16px", height: "16px" }}
                  onClick={() => handleDelete(provider.id_provider)}
                />
              </i>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title">{provider?.cif_provider}</h5>
            <p className="card-text d-flex justify-content-between align-items-center">
              {provider?.email_provider}
              <a href={"mailto:" + provider?.email_provider}>
                <img
                  src={mail}
                  alt="mail"
                  style={{ width: "22px", height: "22px" }}
                />
              </a>
            </p>
            <p className="card-text d-flex justify-content-between align-items-center">
              {provider?.phone_provider}
              <a
                href={"https://wa.me/+34" + provider?.phone_provider}
                target="_blank"
              >
                <img
                  src={wasap}
                  alt="wasap"
                  style={{ width: "22px", height: "22px" }}
                />
              </a>
            </p>
            <p className="card-text">{provider?.category_provider}</p>
            <Link to={"/productos"} className="btn btn-primary">
              Productos
            </Link>
          </div>
        </div>
      </article>
    );
  });

  return (
    <>
      {/* Cabecera retorno menu */}
      <div className="d-flex align-items-center gap-4">
        <Link to={"/"}>
          <img src={loadLogo} alt="loadLogo" />
        </Link>
        <div className="d-flex flex-column justify-content-center">
          <h1>Proveedores</h1>
        </div>
      </div>
      <br />

      <section>
        {error ? (
          // ESTADO DE ERROR si API falla
          <h2>Error inesperado</h2>
        ) : (
          <>
            <Link
              to={"/proveedores/crear"}
              type="button"
              className="btn btn-outline-success m-3"
            >
              Añadir
            </Link>
            {/* READ */}
            {HTMLGetProviders}
          </>
        )}
      </section>
    </>
  );
};

export default ProvidersPage;
