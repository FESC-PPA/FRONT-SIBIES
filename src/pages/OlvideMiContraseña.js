import LogoFESC from "../images/Logo-FESC.png";

const OlvideMiContraseña = () => {
  return (
    <div className="bg-custom-bgColor min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96  ">
        <div className="flex justify-center">
          <img src={LogoFESC} alt="Logo institucion FESC" className="w-96" />
        </div>
        <div className="text-center font-semibold mb-10 text-2xl ">
            <h2>Restauracion De Contraseña:</h2>
        </div>
        <div>
          <div  className="text-center text-lg">
            <label className="block">Digite su correo electronico:</label>
          </div>
          <div>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 mt-4"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-custom-button-bgColor text-white px-4 py-2 rounded">
            Recibir Correo
          </button>
        </div>
        <div className="text-center mt-10">
          <p>
            Si el correo es correcto, recibirás un email con tus datos de inicio
            de sesión. Si no es así, contacta a la oficina de sistemas para
            recuperarlos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OlvideMiContraseña;
