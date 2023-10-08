import LupaBusqueda from "../images/lupa.png";

const FiltroDashboard = ()=>{
    return(
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
            <input
              type="text"
              className="border rounded-lg py-1 px-2 w-1/4"
            />
            <label className="ml-2 mr-2">Correo:</label>
            <input
              type="email"
              className="border rounded-lg py-1 px-2 w-1/4"
            />
          </div>
          <div className="flex justify-center items-center">
            <label className="mr-2">Nombre:</label>
            <input
              type="text"
              placeholder="Nombre"
              className="border rounded-lg py-1 px-2 w-1/4"
            />
            <label className="ml-2 mr-2">Apellido</label>
            <input
              type="text"
              placeholder="Apellido"
              className="border rounded-lg py-1 px-2 w-1/4"
            />
          </div>
          <div className="flex justify-center items-center">
            <label className="mr-2">Periodo:</label>
            <input
              type="date"
              placeholder="Periodo"
              className="border rounded-lg py-1 px-2 w-1/4"
            />
            <label className="ml-2 mr-2">Carrera:</label>
            <select className="border rounded-lg py-1 px-2 w-1/4">
              <option value="Carrera 1">Carrera 1</option>
              <option value="Carrera 2">Carrera 2</option>
              <option value="Carrera 3">Carrera 3</option>
            </select>
          </div>
          <div className="flex justify-center items-center">
            <label className="mr-2">Estado:</label>
            <select className="border rounded-lg py-1 px-2 w-1/4">
              <option value="Estado 1">Estado 1</option>
              <option value="Estado 2">Estado 2</option>
              <option value="Estado 3">Estado 3</option>
            </select>
            <label className="ml-2 mr-2">Semestre:</label>
            <select className="border rounded-lg py-1 px-2 w-1/4">
              <option value="Semestre 1">Semestre 1</option>
              <option value="Semestre 2">Semestre 2</option>
              <option value="Semestre 3">Semestre 3</option>
            </select>
          </div>
        </div>
      </div>
    )
}

export default FiltroDashboard; 