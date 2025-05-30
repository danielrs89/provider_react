import { createContext } from "react";

const CategoryContext = createContext();

function CategoryProviderWrapper(props) {
  const categoryList = ["carnes", "pescados", "vinos", "refrescos", "postres"];

  return (
    <CategoryContext.Provider value={{ categoryList }}>
      {props.children}
    </CategoryContext.Provider>
  );
}
export { CategoryContext, CategoryProviderWrapper };
