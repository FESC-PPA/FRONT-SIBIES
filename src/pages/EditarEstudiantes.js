import FormularioEditarEstudiante from "../components/FormularioEditarEstudiante";
import FormularioHistorialEstado from "../components/FormularioHistorialEstado";

const EditarEstudiantes = () => {
  return (
    <div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <FormularioEditarEstudiante />
      </div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <FormularioHistorialEstado />
      </div>
    </div>
  );
};

export default EditarEstudiantes;
