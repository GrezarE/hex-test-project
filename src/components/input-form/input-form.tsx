import React, { useState, ChangeEventHandler } from "react";
import style from "./input-form.module.css";
import { postLink } from "../../redux/action/postLink";
import { getStatistics } from "../../redux/action/getStatistics";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const InputForm = () => {
  const [link, setLink] = useState("");
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((store) => store.user);
  const { linksArray } = useAppSelector((store) => store.sort);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(postLink(link, accessToken, linksArray));
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLink(e.target.value);
  };
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <label htmlFor="input" className={style.label}>
        Введите ссылку
      </label>
      <input
        id="input"
        type="text"
        className={style.input}
        onChange={onChange}
      />
      <button type="submit" className={style.button}>
        Сократить ссылку
      </button>
    </form>
  );
};
