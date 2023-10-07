import LogoFESC from "../images/Logo-FESC.png";

const Login = () => {
  return (
    <div className="bg-custom-bgColor min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96  ">
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
          <button className="bg-custom-button-bgColor text-white px-4 py-2 rounded">
            Ingresar
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/forgot-password"
            className="text-gray-700 mt-2 block font-semibold border-b"
          >
            Olvidé mi contraseña
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
