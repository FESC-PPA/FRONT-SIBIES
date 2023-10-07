import { BrowserRouter } from "react-router-dom";
import "../css/index.css";
import Login from "../pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}

export default App;
