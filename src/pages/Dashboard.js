import { useEffect, useState } from "react";

import axios from "axios";

import FiltroDashboard from "../components/FiltroDashboard";
import TablaDashboard from "../components/TablaDashboard";

import { verEstudiantes_GET_ENDPOINT } from "../connections/helpers/endpoinst";

const DashBoard = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [filteredEstudiantes, setFilteredEstudiantes] = useState([]);
  const [buscando, setBuscando] = useState(false);

  const buscarEstudiantes = () => {
    setBuscando(true); 
    axios
      .get(verEstudiantes_GET_ENDPOINT)
      .then((respuesta) => {
        setEstudiantes(respuesta.data.data);
        setBuscando(false); 
      })
      .catch((e) => {
        console.error(e);
        setBuscando(false); 
      });
  };

  useEffect(() => {
    if (!buscando) {
      return; 
    }

    buscarEstudiantes(); 
  }, [buscando]);

  return (
    <div className="bg-custom-bgColor min-h-screen">
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <FiltroDashboard
          estudiantes={estudiantes}
          setFilteredEstudiantes={setFilteredEstudiantes}
          buscarEstudiantes={buscarEstudiantes}
        />
      </div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        {buscando ? (
          "Cargando..."
        ) : filteredEstudiantes.length === 0 ? (
          "No se encontraron estudiantes"
        ) : (
          <TablaDashboard estudiantes={filteredEstudiantes} />
        )}
      </div>
    </div>
  );
};

export default DashBoard;
