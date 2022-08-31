import React, { ChangeEventHandler, useState } from "react";
import style from "./login-form.module.css";
import { IUser, IUserSendData } from "../../utils/types";
import { useAppDispatch } from "../../redux/hooks";
import { postLogin } from "../../redux/action/postLogin";

export const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const onChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };
  const onChangePass: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: IUserSendData = {
      grant_type: "",
      username: name,
      password: password,
      scope: "",
      client_id: "",
      client_secret: "",
    };
    dispatch(postLogin(data));
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <label htmlFor="name" className={style.label}>
        Имя
      </label>
      <input id="name" className={style.input} onChange={onChangeName}></input>
      <label htmlFor="password" className={style.label}>
        Пароль
      </label>
      <input
        id="password"
        className={style.input}
        onChange={onChangePass}
      ></input>

      <button type="submit" className={style.button}>
        Войти
      </button>
    </form>
  );
};
