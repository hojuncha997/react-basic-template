// layouts/dashboard/DashboardLayout.js
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="DashboardLayout">
      <h1>Dashboard Layout</h1>
      <Outlet />
    </div>
  );
}
