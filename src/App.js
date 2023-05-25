import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/Router/AppRouter";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
