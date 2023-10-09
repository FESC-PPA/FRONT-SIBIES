import { BrowserRouter, Route, Routes,   } from "react-router-dom";
import "../css/index.css";
import Login from "../pages/Login";
import OlvideMiContraseña from "../pages/OlvideMiContraseña";
import Navegacion from "../layouts/Navegacion";
import DashBoard from "../pages/Dashboard";
import PiePagina from "../layouts/PiePagina";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Navegacion/>
      <Routes>
        <Route path="/" element={<DashBoard/>}></Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
