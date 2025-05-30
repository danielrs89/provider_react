import { createContext, useState } from "react";

const ProviderContext = createContext();

function ProviderProviderWrapper(props) {
  const API_URL = "http://localhost:3001/provider";
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
      console.log("Error getProvider() =>", e);
    }
  };

  const addUser = async () => {
    const newUser = {
      name: "Nuevo Usuario",
      email: "nuevo@correo.com",
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      setUsers((prev) => [...prev, data]);
    } catch (err) {
      console.error("Error al añadir usuario:", err.message);
    }
  };

  const updateUser = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "Nombre Actualizado" }),
      });

      const updated = await res.json();
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? { ...user, ...updated } : user))
      );
    } catch (err) {
      console.error("Error al actualizar usuario:", err.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error al eliminar usuario:", err.message);
    }
  };

  return (
    <ProviderContext.Provider
      value={{ provider, setProviders, error, getProviders }}
    >
      {props.children}
    </ProviderContext.Provider>
  );
}
export { ProviderContext, ProviderProviderWrapper };
