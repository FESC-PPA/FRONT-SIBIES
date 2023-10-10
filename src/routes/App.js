import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../css/index.css";

import Login from "../pages/Login";
import OlvideMiContraseña from "../pages/OlvideMiContraseña";
import DashBoard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import GenerarReportes from "../pages/GenerarReportes";
import CrearEstudiantes from "../pages/CrearEstudiantes";
import EditarEstudiantes from "../pages/EditarEstudiantes";

import Navegacion from "../layouts/Navegacion";
import PiePagina from "../layouts/PiePagina";



function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(true);


  return (
    <BrowserRouter>
      <div className="App">
        {isLoggedIn && <Navegacion/>}
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {isLoggedIn && <Route path="/dashboard" element={<DashBoard />} />}
          {isLoggedIn && <Route path="/reportes" element={<GenerarReportes/>} />}
          {isLoggedIn && <Route path="/crearEstudiante" element={<CrearEstudiantes/>} />}
          {isLoggedIn && <Route path="/editarEstudiante" element={<EditarEstudiantes/>} />}
          <Route
            path="/OlvideContraseña"
            element={<OlvideMiContraseña />}
          ></Route>
        </Routes>
        {isLoggedIn && <PiePagina />}
      </div>
    </BrowserRouter>
  );
}

export default App;
