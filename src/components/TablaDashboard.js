import DeleteIcon from "../images/eliminar.png";
import EditIcon from "../images/lapices.png";
import { Link } from "react-router-dom";

const estudiantes = [
  {
    id: 1,
    identificacion: "12345",
    nombre: "Juan",
    apellidos: "Perez",
    telefono: "123-456",
    semestre: "1",
    estado: "Activo",
  },
  {
    id: 2,
    identificacion: "12345",
    nombre: "Juan",
    apellidos: "Perez",
    telefono: "123-456",
    semestre: "1",
    estado: "Activo",
  },
];

const TablaDashboard = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tabla de Estudiantes</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-center">ID</th>
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
              Semestre
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
            <tr key={estudiante.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.id}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.identificacion}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.nombre}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.apellidos}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.telefono}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.semestre}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {estudiante.estado}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center">
                <div className="mr-2">
                  <Link to="/editarEstudiante">
                    <img
                      src={EditIcon}
                      alt="Editar"
                      className="cursor-pointer w-9"
                    />
                  </Link>
                </div>
                <div>
                  <Link to="/eliminarEstudiante">
                    <img
                      src={DeleteIcon}
                      alt="Eliminar"
                      className="cursor-pointer w-9"
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
