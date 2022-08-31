import React from "react";
import { Link, Navigate } from "react-router-dom";
import { LoginForm } from "../components/login-form/login-form";
import style from "./auth.module.css";
import { useAppSelector } from "../redux/hooks";

export const LoginPage = () => {
  const { isAuthenticated } = useAppSelector((store) => store.user);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className={style.box}>
      <h1 className={style.header}>Вход</h1>
      <LoginForm />
      <Link to="/register" className={style.link}>
        Зарегистрироваться
      </Link>
    </div>
  );
};
