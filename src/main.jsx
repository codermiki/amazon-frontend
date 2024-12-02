import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { DataProvider } from "./components/DataProvider/DataProvider";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
