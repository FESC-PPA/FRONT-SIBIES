import FormularioCrearEstudiante from "../components/FormularioCrearEstudiante";

const CrearEstudiantes = () => {
  return (
    <div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl text-center font-bold">
          Crear Estudiante
        </h1>
        <FormularioCrearEstudiante />
      </div>
      {/* <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <FormularioHistorialEstado
          historialEstadoData={historialEstadoData}
          onHistorialEstadoDataChange={handleHistorialEstadoDataChange}
          onSubmit={handleCrearClick}
        />
      </div> */}
    </div>
  );
};

export default CrearEstudiantes;
