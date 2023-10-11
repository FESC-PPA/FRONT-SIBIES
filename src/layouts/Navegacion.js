import React from "react";
import logoFescBlanco from "../images/Logo-FESC-2021-Blanco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Navegacion = () => {
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
        <FontAwesomeIcon className="mr-6" icon={faArrowRightFromBracket} size="2x" rotation={180} style={{color: "#ffffff",}} />
        </div>
      </Link>
    </nav>
  );
};

export default Navegacion;
