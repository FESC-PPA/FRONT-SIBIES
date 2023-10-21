import React from "react";
import { useNavigate } from "react-router-dom";

const FormularioHistorialEstado = ({
  historialEstadoData,
  onHistorialEstadoDataChange,
  onSubmit,
}) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la creación del historial
    onSubmit();

    navigate("/dashboard")
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Historial de estado del estudiante</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mt-10">
          <div className="flex justify-center items-center">
            <label className="mr-2">Periodo:</label>
            <input
              type="date"
              id="periodo"
              name="periodo"
              value={historialEstadoData.periodo}
              onChange={onHistorialEstadoDataChange}
              className="border rounded-lg py-1 px-2 w-1/4"
            />
            <label className="ml-2 mr-2">Tipo de estado:</label>
            <select
              name="tipoEstado"
              value={historialEstadoData.tipoEstado}
              onChange={onHistorialEstadoDataChange}
              className="border rounded-lg py-1 px-2 w-1/4"
            >
              <option value="">Selecciona un estado</option>
              <option value="Desertor">Desertor</option>
              <option value="Ausente">Ausente</option>
              <option value="Matriculado">Matriculado</option>
            </select>
          </div>
          <div className="flex justify-center items-center">
            <label className="mr-2">Carrera:</label>
            <select
              name="carrera"
              value={historialEstadoData.carrera}
              onChange={onHistorialEstadoDataChange}
              className="border rounded-lg py-1 px-2 w-1/4"
            >
              <option value="">Selecciona una carrera</option>
              <option value="1">Diseño Gráfico</option>
              <option value="2">
                Diseño y Administración de Negocios de la Moda
              </option>
              <option value="3">Administracion Turística y Hotelera</option>
              <option value="4">Ingeniería de Software</option>
              <option value="5">
                Administración de Negocios Internacionales
              </option>
              <option value="6">
                Administracion de Negocios Internacionales - Distancia
              </option>
              <option value="7">Administracion Financiera</option>
              <option value="8">Gestión Logística Empresarial</option>
            </select>
            <label className="ml-2 mr-2">Observación del estado</label>
            <input
              type="text"
              name="observacion"
              value={historialEstadoData.observacion}
              onChange={onHistorialEstadoDataChange}
              className="border rounded-lg py-1 px-2 w-1/4"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-10">
          <button
            type="submit"
            className="bg-custom-button-bgColor-accept text-white px-16 py-2 rounded"
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioHistorialEstado;
