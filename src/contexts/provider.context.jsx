import { createContext, useState } from "react";

const ProviderContext = createContext();

function ProviderProviderWrapper(props) {
  const API_URL = "http://localhost:3000/provider";
  const [provider, setProviders] = useState([]);
  const [error, setError] = useState(false);

  const getProviders = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProviders(data);

      setError(false);
    } catch (e) {
      setError(true);
      console.log("Error getProviders() =>", e);
    }
  };

  const addProvider = async (newProvider) => {
    try {
      const res = await fetch(`${API_URL}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProvider),
      });

      const data = await res.json();
      setProviders((prev) => [...prev, data.provider]);
    } catch (err) {
      console.error("Error al añadir proveedor:", err.message);
    }
  };

  const updateProvider = async (formData, id) => {
    try {
      const res = await fetch(`${API_URL}/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name_provider: formData.name,
          cif_provider: formData.cif,
          email_provider: formData.email,
          phone_provider: formData.phone,
          category_provider: formData.category,
        }),
      });

      const updated = await res.json();
      setProviders((prev) =>
        prev.map((provider) =>
          provider.id_provider === id ? { ...provider, ...updated } : provider
        )
      );
    } catch (err) {
      console.error("Error al actualizar proveedor:", err.message);
    }
  };

  const deleteProvider = async (id) => {
    try {
      const response = await fetch(`${API_URL}/delete/${Number(id)}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Error al eliminar: ${response.status}`);
      }
      setProviders((prev) => prev.filter((provider) => provider.id !== id));
    } catch (err) {
      console.error("Error al eliminar el proveedor:", err.message);
    }
  };

  return (
    <ProviderContext.Provider
      value={{
        provider,
        setProviders,
        error,
        getProviders,
        updateProvider,
        addProvider,
        deleteProvider,
      }}
    >
      {props.children}
    </ProviderContext.Provider>
  );
}
export { ProviderContext, ProviderProviderWrapper };
