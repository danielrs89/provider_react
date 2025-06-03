import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SalesPage from "./pages/SalesPage";
import ReportsPage from "./pages/ReportsPage";
import ErrorPage from "./pages/ErrorPage";
import ProvidersPage from "./pages/ProvidersPage";
import ProviderCreatePage from "./pages/ProvidersCreatePage";
import ProvidersUpdatePage from "./pages/ProvidersUpdatePage";
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
          <Route path="/ventas" element={<SalesPage />} />
          <Route path="/informes" element={<ReportsPage />} />

          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
