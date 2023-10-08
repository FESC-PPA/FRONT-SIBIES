import IniciarSesion from "../components/IniciarSesion";

const Login = () => {


  return (
    <div className="bg-custom-bgColor min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96  ">
        {<IniciarSesion />}
      </div>
    </div>
  );
};

export default Login;
