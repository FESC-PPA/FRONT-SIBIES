import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const FiltroDashboard = ({
  estudiantes,
  setFilteredEstudiantes,
  buscarEstudiantes,
}) => {
  const [filtro, setFiltro] = useState({
    identificationCard: "",
    email: "",
    name: "",
    lastName: "",
    period: "",
    career: "",
    status: "",
    semester: "",
  });

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFiltro({
      ...filtro,
      [name]: value,
    });
  };

  const handleSearch = () => {
    const filtered = estudiantes.filter((estudiante) => {
      return estudianteMatchesFilter(estudiante, filtro);
    });

    setFilteredEstudiantes(filtered);
    buscarEstudiantes();
  };

  const estudianteMatchesFilter = (estudiante, filtro) => {
    if (Object.values(filtro).every((filtroValue) => filtroValue === "")) {
      
      return true;
    }

    return (
      (filtro.identificationCard === "" ||
        estudiante.identicationCard?.includes(filtro.identificationCard)) &&
      (filtro.email === "" || estudiante.email?.includes(filtro.email)) &&
      (filtro.name === "" || estudiante.name?.includes(filtro.name)) &&
      (filtro.lastName === "" ||
        estudiante.lastName?.includes(filtro.lastName)) &&
      (!filtro.period ||
        (estudiante.HistoryStatus &&
          estudiante.HistoryStatus.period === filtro.period)) &&
      (!filtro.career ||
        (estudiante.HistoryStatus &&
          estudiante.HistoryStatus.career_id.career === filtro.career)) &&
      (!filtro.status ||
        (estudiante.HistoryStatus &&
          estudiante.HistoryStatus.status_id.status === filtro.status)) &&
      (!filtro.semester ||
        (estudiante.HistoryStatus &&
          estudiante.HistoryStatus.semester === filtro.semester))
    );
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Búsqueda de Estudiantes</h2>
        <button className="w-14" onClick={handleSearch}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2xl"
            style={{ color: "#000000" }}
          />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center items-center">
          <label className="mr-2">No documento:</label>
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-1/4"
            name="identificationCard"
            value={filtro.identificationCard}
            onChange={handleInputChange}
          />
          <label className="ml-2 mr-2">Correo:</label>
          <input
            type="email"
            className="border rounded-lg py-1 px-2 w-1/4"
            name="email"
            value={filtro.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Nombre:</label>
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-1/4"
            name="name"
            value={filtro.name}
            onChange={handleInputChange}
          />
          <label className="ml-2 mr-2">Apellido</label>
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-1/4"
            name="lastName"
            value={filtro.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Periodo:</label>
          <input
            type="date"
            className="border rounded-lg py-1 px-2 w-1/4"
            name="period"
            value={filtro.period}
            onChange={handleInputChange}
          />
          <label className="ml-2 mr-2">Carrera:</label>
          <select
            className="border rounded-lg py-1 px-2 w-1/4"
            name="career"
            value={filtro.career}
            onChange={handleInputChange}
          >
            <option value="">Selecciona una carrera</option>
            <option value="Diseño Gráfico">Diseño Gráfico</option>
            <option value="Diseño y Administración de Negocios de la Moda">
              Diseño y Administración de Negocios de la Moda
            </option>
            <option value="Administracion Turística y Hotelera">
              Administracion Turística y Hotelera
            </option>
            <option value="Ingeniería de Software">
              Ingeniería de Software
            </option>
            <option value="Administración de Negocios Internacionales">
              Administración de Negocios Internacionales
            </option>
            <option value="Administración de Negocios Internacionales - Distancia">
              Administración de Negocios Internacionales - Distancia
            </option>
            <option value="Administracion Financiera">
              Administracion Financiera
            </option>
            <option value="Gestión Logística Empresarial">
              Gestión Logística Empresarial
            </option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Estado:</label>
          <select
            className="border rounded-lg py-1 px-2 w-1/4"
            name="status"
            value={filtro.status}
            onChange={handleInputChange}
          >
            <option value="">Selecciona un estado</option>
            <option value="Desertor">Desertor</option>
            <option value="Ausente">Ausente</option>
            <option value="Matriculado">Matriculado</option>
          </select>
          <label className="ml-2 mr-2">Semestre:</label>
          <select
            className="border rounded-lg py-1 px-2 w-1/4"
            name="semester"
            value={filtro.semester}
            onChange={handleInputChange}
          >
            <option value="">Selecciona un semestre</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FiltroDashboard;
