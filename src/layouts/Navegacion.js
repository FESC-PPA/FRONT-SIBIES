import React from "react";
import logoFescBlanco from "../images/Logo-FESC-2021-Blanco.png";
import logoSignOff from "../images/cerrar-sesion.png";
import { Link } from "react-router-dom";

const Navegacion = ({}) => {
  return (
    <nav className="bg-red-600 flex items-center justify-between p-4">
      <div className="flex items-center space-x-10">
        <img
          src={logoFescBlanco}
          alt="Logo blanco - FESC"
          className="w-24 mr-10"
        />
        <Link to="/dashboard" className="text-white ">
          Inicio
        </Link>
        <Link to="/reportes" className="text-white">
          Generar reporte
        </Link>
        <Link to="/crearEstudiante" className="text-white">
          Crear Estudiante
        </Link>
      </div>
      <Link  to="/">
        <div>
          <img src={logoSignOff} alt="Logout"  className="w-6 h-6 mr-6" />
        </div>
      </Link>
    </nav>
  );
};

export default Navegacion;
