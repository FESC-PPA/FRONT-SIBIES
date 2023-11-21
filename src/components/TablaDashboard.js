import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TablaDashboard = ({ estudiantes }) => {
  console.log(estudiantes)
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tabla de Estudiantes</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Identificación
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Nombre
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Apellidos
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Teléfono
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Estado
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante.identificationCard}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.identicationCard}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.lastName}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.phone}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.email}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                Matriculado
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center">
                <div className="mr-2">
                  <Link to="/editarEstudiante">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      size="2x"
                      style={{ color: "#000000" }}
                    />
                  </Link>
                </div>
                <div>
                  <Link to="#">
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="2x"
                      style={{ color: "#000000" }}
                    />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDashboard;
