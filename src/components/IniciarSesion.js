import LogoFESC from "../images/Logo-FESC.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import { INICIARSESION_POST_ENDPOINT } from "../connections/helpers/endpoinst";

const IniciarSesion = ({setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log(formData)
    
      const response = await fetch(INICIARSESION_POST_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic YWRtaW46YWRtaW4="
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        
      } else {
        setError("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      setError("Se produjo un error al conectar con el servidor.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <img src={LogoFESC} alt="Logo institucion FESC" className="w-96" />
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="username">
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            name="username" 
            className="w-full px-4 py-2 rounded border border-gray-300"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block" htmlFor="password">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password" 
            className="w-full px-4 py-2 rounded border border-gray-300"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-custom-button-bgColor text-white px-4 py-2 rounded"
          >
            Ingresar
          </button>
        </div>
      </form>

      <div className="flex justify-center mt-10">
        <Link
          to="/OlvideContraseña"
          className="text-gray-700 mt-2 block font-semibold border-b"
        >
          Olvidé mi contraseña
        </Link>
      </div>
    </div>
  );
};

export default IniciarSesion;
