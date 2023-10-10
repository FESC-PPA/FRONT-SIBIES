import { Link } from "react-router-dom";

const FormularioHistorialEstado = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Historial de estado del estudiante</h2>

      <div className="space-y-4 mt-10">
        <div className="flex justify-center items-center">
          <label className="mr-2">Periodo</label>
          <input type="date" className="border rounded-lg py-1 px-2 w-1/4" />
          <label className="ml-2 mr-2">Tipo de estado:</label>
          <select className="border rounded-lg py-1 px-2 w-1/4">
            <option value="">Selecciona un estado</option>
            <option value="1">Desertor</option>
            <option value="2">Ausente</option>
            <option value="3">Matriculado</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Carrera:</label>
          <select className="border rounded-lg py-1 px-2 w-1/4">
            <option value="">Selecciona una carrera</option>
            <option value="1">Diseño Gráfico</option>
            <option value="2">
              Diseño y Administración de Negocios de la Moda
            </option>
            <option value="3">Administracion Turística y Hotelera</option>
            <option value="4">Ingeniería de Sotware</option>
            <option value="5">
              Administración de Negocios Internacionales
            </option>
            <option value="6">
              Administración de Negocios Internacionales - Distancia
            </option>
            <option value="7">Administracion Financiera</option>
            <option value="8">Gestión Logística Empresarial</option>
          </select>
          <label className="ml-2 mr-2">Observacion del estado</label>
          <input type="text" className="border rounded-lg py-1 px-2 w-1/4" />
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-10">
        <Link
          to=""
          className="bg-custom-button-bgColor-accept text-white px-16 py-2 rounded"
        >
          Crear
        </Link>
        <Link
          to="/dashboard"
          className="bg-custom-button-bgColor text-white px-16 py-2 rounded"
        >
          Volver
        </Link>
      </div>
    </div>
  );
};

export default FormularioHistorialEstado;
