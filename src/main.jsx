import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProviderProviderWrapper } from "./contexts/provider.context.jsx";
import { CategoryProviderWrapper } from "./contexts/category.context.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderProviderWrapper>
      <CategoryProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>

      </CategoryProviderWrapper>
    </ProviderProviderWrapper>
      
  </StrictMode>
);
