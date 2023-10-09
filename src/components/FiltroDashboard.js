import LupaBusqueda from "../images/lupa.png";

const FiltroDashboard = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Busqueda de Estudiantes</h1>
        <button className="w-14">
          <img src={LupaBusqueda} alt="Buscar" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center items-center">
          <label className="mr-2">No documento:</label>
          <input type="text" className="border rounded-lg py-1 px-2 w-1/4" />
          <label className="ml-2 mr-2">Correo:</label>
          <input type="email" className="border rounded-lg py-1 px-2 w-1/4" />
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Nombre:</label>
          <input type="text" className="border rounded-lg py-1 px-2 w-1/4" />
          <label className="ml-2 mr-2">Apellido</label>
          <input type="text" className="border rounded-lg py-1 px-2 w-1/4" />
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Periodo:</label>
          <input type="date" className="border rounded-lg py-1 px-2 w-1/4" />
          <label className="ml-2 mr-2">Carrera:</label>
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
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Estado:</label>
          <select className="border rounded-lg py-1 px-2 w-1/4">
            <option value="">Selecciona un estado</option>
            <option value="1">Desertor</option>
            <option value="2">Ausente</option>
            <option value="3">Matriculado</option>
          </select>
          <label className="ml-2 mr-2">Semestre:</label>
          <select className="border rounded-lg py-1 px-2 w-1/4">
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
