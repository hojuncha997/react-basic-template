import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./layouts/main/MainLayout";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import { Outlet, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";

function App() {
  return (
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
