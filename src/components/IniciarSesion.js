import LogoFESC from "../images/Logo-FESC.png";
import { Link } from "react-router-dom";

const IniciarSesion = () => {

  

  
  return (
    <div>
      <div className="flex justify-center">
        <img src={LogoFESC} alt="Logo institucion FESC" className="w-96" />
      </div>
      <div className="mb-4">
        <label className="block">Usuario:</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block">Contraseña:</label>
        <input
          type="password"
          className="w-full px-4 py-2 rounded border border-gray-300"
        />
      </div>

      <div className="flex justify-center mt-10">
        <Link
          to="/dashboard"
          className="bg-custom-button-bgColor text-white px-4 py-2 rounded"
          
        >
          Ingresar
        </Link>
      </div>

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
