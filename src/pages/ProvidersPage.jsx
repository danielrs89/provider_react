import { useContext, useEffect } from "react";
import loadLogo from "../assets/img/load.png";
import { Link } from "react-router-dom";
import { ProviderContext } from "../contexts/provider.context";
import ProviderCard from "../components/ProviderCard";

const ProvidersPage = () => {
  const { provider, error, getProviders } = useContext(ProviderContext);

  useEffect(() => {
    getProviders();
  }, []); // Dependencias vacías: solo se ejecuta una vez al montar el componente

  const providerCards = provider.map((provider) => {
    return (
      <div key={provider.id}>
        <ProviderCard provider={provider}></ProviderCard>
      </div>
    );
  });
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
      <br />
      <section className="">
        {error ? (
          // control de ESTADO DE ERROR Muestra un mensaje de error si la API falla
          <h2>Error inesperado</h2>
        ) : // control de ESTADO DE CARGA esperando a que providersCards tenga longitud */ }
        !providerCards.length ? (
          <h2>Loading...</h2>
        ) : (
          <ul>{providerCards}</ul>
        )}
      </section>
    </>
  );
};

export default ProvidersPage;
