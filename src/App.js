import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MenuAppBar from "./components/menu";
import Rutas from "./router/routes";

function App() {
  return (
    <Router>
      <div>
        <MenuAppBar />
      </div>
      <Rutas />
    </Router>
  );
}

export default App;
