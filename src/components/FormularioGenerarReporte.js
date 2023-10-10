import { useState } from "react";
import { Link } from "react-router-dom";

const FormularioGenerarReporte = () => {
  const [estados, setEstados] = useState({
    ausentes: false,
    desertores: false,
    matriculados: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setEstados((prevEstados) => ({
      ...prevEstados,
      [name]: checked,
    }));
  };

  return (
    <div>
      <div className="space-y-4 mt-10">
        <div className="flex justify-center items-center">
          <label className="mr-2">Desde periodo:</label>
          <input type="date" className="border rounded-lg py-1 px-2 w-1/4" />
          <label className="ml-2 mr-2">Hasta periodo:</label>
          <input type="date" className="border rounded-lg py-1 px-2 w-1/4" />
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Nombre del reporte:</label>
          <input type="text" className="border rounded-lg py-1 px-2 w-1/2" />
        </div>

        <div className="flex justify-center items-center">
          <label className="mr-2">Estados:</label>
          <div className="flex items-center flex-col">
            <label className="mb-2">
              <input
                type="checkbox"
                name="ausentes"
                checked={estados.ausentes}
                onChange={handleCheckboxChange}
              />{" "}
              Ausentes
            </label>
            <label className="mb-2">
              <input
                type="checkbox"
                name="desertores"
                checked={estados.desertores}
                onChange={handleCheckboxChange}
              />{" "}
              Desertores
            </label>
            <label>
              <input
                type="checkbox"
                name="matriculados"
                checked={estados.matriculados}
                onChange={handleCheckboxChange}
              />{" "}
              Matriculados
            </label>
          </div>
          <label className="ml-2 mr-2">Carrera:</label>
          <select className="border rounded-lg py-1 px-2 w-1/4">
            <option value="">Selecciona una carrera</option>
            <option value="1">Diseño Gráfico</option>
            <option value="2">Diseño y Administración de Negocios de la Moda</option>
            <option value="3">Administración Turística y Hotelera</option>
            <option value="4">Ingeniería de Software</option>
            <option value="5">Administración de Negocios Internacionales</option>
            <option value="6">Administración de Negocios Internacionales - Distancia</option>
            <option value="7">Administración Financiera</option>
            <option value="8">Gestión Logística Empresarial</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <label className="mr-2">Observación:</label>
          <input type="text" className="border rounded-lg py-1 px-2 w-1/4" />
        </div>
      </div>

      <div className="flex justify-center space-x-6 mt-10">
        <Link
          to=""
          className="bg-custom-button-bgColor-accept text-white px-16 py-2 rounded"
        >
          Descargar
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

export default FormularioGenerarReporte;
