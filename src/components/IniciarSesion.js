import LogoFESC from "../images/Logo-FESC.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { INICIARSESION_POST_ENDPOINT } from "../connections/helpers/endpoinst";

const IniciarSesion = ({ setIsLoggedIn }) => {
  const [credenciales, setCredenciales] = useState({
    document: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredenciales({ ...credenciales, [name]: value });
  };

  const navigate = useNavigate();
  const [tokenTimer, setTokenTimer] = useState(null);

  const logoutAndRedirect = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const currentTime = Date.now();
      const tokenExpTime = localStorage.getItem("tokenExpTime");

      if (tokenExpTime && currentTime > tokenExpTime) {
        logoutAndRedirect();
      } else {
        const timeRemaining = tokenExpTime - currentTime;
        setTokenTimer(
          setTimeout(() => {
            logoutAndRedirect();
          }, timeRemaining)
        );
      }
    }
  }, [setIsLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credenciales.document || !credenciales.password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credenciales),
    };

    try {
      const response = await fetch(INICIARSESION_POST_ENDPOINT, requestOptions);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.data.accessToken);
        const tokenExpTime = Date.now() + 300000; // 5 minutos en milisegundos
        localStorage.setItem("tokenExpTime", tokenExpTime);
        setIsLoggedIn(true);
        setTokenTimer(setTimeout(() => logoutAndRedirect(), 300000)); // Inicia el temporizador de 5 minutos
        navigate("/dashboard");
      } else {
        setError("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setError("Error al iniciar sesión. Inténtalo de nuevo.");
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
            id="document"
            name="document"
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
