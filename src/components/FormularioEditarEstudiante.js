
const FormularioEditarEstudiante = () => {
    return(
        <div>
      <h2 className="text-2xl font-bold">Editar Estudiante</h2>

      <div className="space-y-4 mt-10">
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
          <label className="mr-2">Celular:</label>
          <input type="number" className="border rounded-lg py-1 px-2 w-1/4" />
          <label className="ml-2 mr-2">Genero:</label>
          <select className="border rounded-lg py-1 px-2 w-1/4">
            <option value="">Selecciona un genero</option>
            <option value="1">Hombre</option>
            <option value="2">Mujer</option>
            <option value="3">No binario</option>
            <option value="4">Genero fluido</option>
            <option value="5">Otro</option>
          </select>
        </div>
      </div>
    </div>
    )

}

export default FormularioEditarEstudiante