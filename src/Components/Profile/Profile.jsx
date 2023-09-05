import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedProfile = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  if (!user) return <Navigate to="/login" state={{ from: location }} />;
  return <Outlet />;
};
