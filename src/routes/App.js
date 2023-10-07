import { BrowserRouter } from "react-router-dom";
import "../css/index.css";
import Navbar from "../layouts/Navegacion";
import Footer from "../layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
