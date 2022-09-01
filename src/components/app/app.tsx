import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, LoginPage, RegisterPage } from "../../pages";
import { useAppSelector } from "../../redux/hooks";
import { ProtectedRoute } from "../protected-route/protected-route";
import style from "./app.module.css";

export const App = () => {
  const { isAuthenticated } = useAppSelector((store) => store.user);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className={style.app}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};
