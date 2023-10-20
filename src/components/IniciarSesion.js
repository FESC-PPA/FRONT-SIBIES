import LogoFESC from "../images/Logo-FESC.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { INICIARSESION_POST_ENDPOINT } from "../connections/helpers/endpoinst";

const IniciarSesion = ({ setIsLoggedIn }) => {
  const [credenciales, setCredenciales] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredenciales({ ...credenciales, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credenciales.username === "1091966481" &&
      credenciales.password === "1091966481"
    ) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
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
