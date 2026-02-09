import { Navigate, Outlet } from "react-router-dom";

type Role = "USER" | "ARTIST" | "ADMIN";

interface ProtectedRouteProps {
  allowedRoles?: Role;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role") as Role;

  console.log("sd", role, allowedRoles);

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(role)) {
    if (role === "ADMIN") return <Navigate to="/admin/dashboard" replace />;
    if (role === "ARTIST") return <Navigate to="/dashboard" replace />;
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
  // return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
