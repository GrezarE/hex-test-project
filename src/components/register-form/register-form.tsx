import React, { ChangeEventHandler, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import style from "./register-form.module.css";
import { postRegister } from "../../redux/action/postRegister";
import { IUser } from "../../utils/types";

export const RegisterForm = () => {
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
    const data: IUser = {
      username: name,
      password: password,
    };
    console.log(data);
    dispatch(postRegister(data));
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
        Зарегистрироваться
      </button>
    </form>
  );
};
