import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, LoginPage, RegisterPage } from "../../pages";
import { ProtectedRoute } from "../protected-route/protected-route";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};
