import { FC, ReactElement } from "react";
import { Navigate, Route, useLocation } from "react-router-dom";

// import { useSelector } from "../../services/hooks";
import { useAppSelector } from "../../redux/hooks";

// export interface IProtectedRoute {
//   // isAuthenticated?: boolean;
//   // isAllowed?: boolean;
//   // restrictedPath: string;
//   // authenticationPath: string;
//   path: string;
//   exact: boolean;
//   children: ReactElement;
// }

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAppSelector((store) => store.user);
  console.log(isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
