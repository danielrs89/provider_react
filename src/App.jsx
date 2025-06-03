import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProvidersPage from "./pages/providers/ProvidersPage";
import ProviderCreatePage from "./pages/providers/ProvidersCreatePage";
import ProvidersUpdatePage from "./pages/providers/ProvidersUpdatePage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductsById from "./pages/products/ProductsById";

function App() {
  return (
    <>

      <Suspense fallback={<h1>Cargando...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proveedores" element={<ProvidersPage />} />
          <Route path="/proveedores/crear" element={<ProviderCreatePage />} />
          <Route path="/proveedores/editar/:id" element={<ProvidersUpdatePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/productos/:id" element={<ProductsById />} />
          {/* <Route path="/ventas" element={<SalesPage />} />
          <Route path="/informes" element={<ReportsPage />} /> */}

          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
