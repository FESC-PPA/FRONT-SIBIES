import FormularioEditarEstudiante from "../components/FormularioEditarEstudiante";
import FormularioEditarHistorialEstado from "../components/FormularioEditarHistorilaEstado";

const EditarEstudiantes = () => {
  return (
    <div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <FormularioEditarEstudiante />
      </div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <FormularioEditarHistorialEstado />
      </div>
    </div>
  );
};

export default EditarEstudiantes;
