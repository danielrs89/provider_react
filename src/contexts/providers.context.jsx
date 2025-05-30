import { createContext, useState } from "react";

const ProviderContext = createContext();

function ProviderProviderWrapper(props) {
  const API_URL = "http://localhost:3001";
  const [provider, setProvider] = useState([]);
  const [error, setError] = useState(false);

  const getProvider = async () => {
    try {
      const response = await fetch(API_URL);
    } catch (error) {}
  };

  return (
    <ProviderContext.Provider value={{ provider, error }}>
      {props.children}
    </ProviderContext.Provider>
  );
}
export { ProviderContext, ProviderProviderWrapper };
