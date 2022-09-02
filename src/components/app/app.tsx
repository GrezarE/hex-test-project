import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, LoginPage, RegisterPage } from "../../pages";
import { ProtectedRoute } from "../protected-route/protected-route";
import style from "./app.module.css";

export const App = () => {

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
