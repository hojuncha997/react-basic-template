// layouts/dashboard/DashboardLayout.js
import { Outlet } from "react-router-dom";
import { NavVertical } from "./nav/NavVertical";
import Main from "./Main";

export default function DashboardLayout() {
  return (
    
    <div className="DashboardLayout" style={{display:"flex"}}>
      {/* <h1>Dashboard Layout</h1> */}
      <NavVertical />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}
