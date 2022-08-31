import React from "react";
import style from "./input-form.module.css";

export const InputForm = () => {
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <label htmlFor="input" className={style.label}>
        Введите ссылку
      </label>
      <input id="input" type="text" className={style.input} />
      <button type="submit" className={style.button}>
        Сократить ссылку
      </button>
    </form>
  );
};
