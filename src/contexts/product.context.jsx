import { createContext, useState } from "react";

const ProductContext = createContext();

function ProductProviderWrapper(props) {
  const API_URL = "http://localhost:3000/product";
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);

      setError(false);
    } catch (e) {
      setError(true);
      console.log("Error getProducts() =>", e);
    }
  };

  const getProductById = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${Number(id)}`);
      const data = await res.json();
      setProducts([data]);

      setError(false);
    } catch (err) {
      setError(true);
      console.log("Error getProductById() =>", e);
    }
  };
  return (
    <ProductContext.Provider
      value={{ products, setProducts, error, getProducts, getProductById }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProviderWrapper };

