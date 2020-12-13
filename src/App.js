// import "./App.css";
import Layout from "./Hoc/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
// import Cadastrar from "./Pages/cadastrar/cadastrar";

function App() {
  return (
    <Router>
      <Routes />
      <Layout />
    </Router>
  );
}

export default App;
