import React, { useEffect } from "react";
import { RegisterForm } from "../components/register-form/register-form";
import { Link, Navigate } from "react-router-dom";
import style from "./auth.module.css";
import { useAppSelector } from "../redux/hooks";

export const RegisterPage = () => {
  const { isAuthenticated } = useAppSelector((store) => store.user);
  const { registerSuccess } = useAppSelector((store) => store.api);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (registerSuccess) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={style.box}>
      <h1 className={style.header}>Регистрация</h1>
      <RegisterForm />
      <div className={style.link_box}>
        <p className={style.text}>Уже зарегистрированы?</p>
        <Link to="/login" className={style.link}>
          Войти
        </Link>
      </div>
    </div>
  );
};
