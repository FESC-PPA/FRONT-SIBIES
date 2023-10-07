import React from "react";
import logoFescBlanco from "../images/Logo-FESC-2021-Blanco.png";
import logoSignOff from "../images/cerrar-sesion.png";

const Navbar = () => {
  return (
    <nav className="bg-red-600 flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src={logoFescBlanco}
          alt="Logo blanco - FESC"
          className="w-24 mr-10"
        />
        <a href="/" className="text-white mr-8">
          Inicio
        </a>
        <a href="/reportes" className="text-white mr-8">
          Genera Reportes
        </a>
        <a href="/crear-estudiantes" className="text-white">
          Crear Estudiantes
        </a>
      </div>
      <div>
        <img src={logoSignOff} alt="Logout" className="w-6 h-6 mr-6" />
      </div>
    </nav>
  );
};

export default Navbar;
