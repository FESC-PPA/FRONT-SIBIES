import axios from "axios";
import FormularioCrearEstudiante from "../components/FormularioCrearEstudiante";
import FormularioHistorialEstado from "../components/FormularioHistorialEstado";

import { useState } from "react";

import { crearEstudiantes_POST_ENDPOINT } from "../connections/helpers/endpoinst";

const CrearEstudiantes = () => {
  const [estudianteData, setEstudianteData] = useState({
    documento: "",
    correo: "",
    nombre: "",
    apellido: "",
    celular: "",
    genero: "",
  });

  const [historialEstadoData, setHistorialEstadoData] = useState({
    periodo: "",
    tipoEstado: "",
    carrera: "",
    observacion: "",
  });

  const handleEstudianteDataChange = (e) => {
    const { name, value } = e.target;
    setEstudianteData({ ...estudianteData, [name]: value });
  };

  const handleHistorialEstadoDataChange = (e) => {
    const { name, value } = e.target;
    setHistorialEstadoData({ ...historialEstadoData, [name]: value });
  };

  const handleCrearClick = () => {
    // Crear un objeto de datos con la estructura necesaria
    const dataToSend = {
      identificationCard: estudianteData.documento,
      name: estudianteData.nombre,
      lastName: estudianteData.apellido,
      email: estudianteData.correo,
      phone: estudianteData.celular,
      rolId: 2, // Reemplaza con el valor adecuado
      gender: estudianteData.genero,
      HistoryStatus: {
        observacion: historialEstadoData.observacion,
        status_id: {
          status: historialEstadoData.tipoEstado,
        },
        period: historialEstadoData.periodo,
        career_id: {
          career: historialEstadoData.carrera, // Agrega el valor adecuado
        },
      },
    };

    // Realizar la solicitud POST al servidor
    axios
      .post(crearEstudiantes_POST_ENDPOINT, dataToSend)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar datos al servidor:", error);
      });
  };

  return (
    <div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <FormularioCrearEstudiante
          estudianteData={estudianteData}
          onEstudianteDataChange={handleEstudianteDataChange}
        />
      </div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <FormularioHistorialEstado
          historialEstadoData={historialEstadoData}
          onHistorialEstadoDataChange={handleHistorialEstadoDataChange}
          onSubmit={handleCrearClick}
        />
      </div>
    </div>
  );
};

export default CrearEstudiantes;
