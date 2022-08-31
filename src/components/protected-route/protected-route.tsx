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
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    return children;
  }

  // return (
  //   <Route
  //     {...rest}
  //     render={()  =>
  //       isAuthenticated ? (
  //         children
  //       ) : (
  //         <Navigate to={{ pathname: "/login", state={{ from: location }} }} />
  //       )
  //     }
  //   />
  // );
};
