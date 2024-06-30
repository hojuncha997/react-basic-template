import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import { LoginPage } from "./elements";

export default function RoutesConfig() {
  return useRoutes([
    { path: "/", element: <MainLayout />, children: [] },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
}
