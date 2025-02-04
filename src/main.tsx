import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { MenuBarProvider } from "./context/layout/menu-bar-context/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MenuBarProvider>
        <App />
      </MenuBarProvider>
    </BrowserRouter>
  </StrictMode>
);
