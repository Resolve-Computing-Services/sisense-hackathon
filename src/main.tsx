import React from "react"
import ReactDOM from "react-dom/client"
import SisenseProvider from "./configs/sisense.conf"
import AppRouter from "./routes"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SisenseProvider>
      <AppRouter />
    </SisenseProvider>
  </React.StrictMode>
)
