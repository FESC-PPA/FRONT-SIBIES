import { BrowserRouter } from "react-router-dom";
import "../css/index.css";
import NavigationBar from "../layouts/Navegacion";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
    </BrowserRouter>
  );
}

export default App;
