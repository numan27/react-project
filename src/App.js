import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./Navigation/RouterConfig";
import { ToastContainer } from "react-toastify";
import "./assets/css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
