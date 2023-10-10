import FormularioCrearEstudiante from "../components/FormularioCrearEstudiante";
import FormularioHistorialEstado from "../components/FormularioHistorialEstado";

const CrearEstudiantes = () => {
    return (
      <div>
        <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
          <FormularioCrearEstudiante/>
      </div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
          <FormularioHistorialEstado/>
      </div>

      </div>
      
    );
  };
  
  export default CrearEstudiantes;