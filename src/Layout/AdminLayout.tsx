import { Outlet } from "react-router-dom";

import "./AdminLayout.scss";
import AdminSidebar from "../components/sidebar/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="adminLayout">
      <div className="adminLayout-left">
        <div className="adminLayout-left-line"></div>
        <AdminSidebar />
      </div>
      <div className="adminLayout-right">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
