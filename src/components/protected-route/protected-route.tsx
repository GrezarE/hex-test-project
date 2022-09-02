import { Navigate, useLocation } from "react-router-dom";

import { useAppSelector } from "../../redux/hooks";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAppSelector((store) => store.user);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
