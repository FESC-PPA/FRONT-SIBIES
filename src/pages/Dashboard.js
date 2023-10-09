import FiltroDashboard from "../components/FiltroDashboard";
import Navegacion from "../layouts/Navegacion";
import PiePagina from "../layouts/PiePagina";

import TablaDashboard from "../components/TablaDashboard";



const DashBoard = () => {
  return (
    <div className="bg-custom-bgColor min-h-screen">


      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <FiltroDashboard />
      </div>
      <div className="mt-8 mr-8 ml-8 p-8 bg-white rounded-lg shadow-md">
        <TablaDashboard/>
      </div>

      <PiePagina />
    </div>
  );
};

export default DashBoard;
