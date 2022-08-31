import React from "react";
import { InputForm } from "../components/input-form/input-form";
import style from "./main.module.css";
import { LinkTable } from "../components/link-table/link-table";

const testData = {
  short: "http://79.143.31.216/s/7ASMU",
  target: "https://docs.docker.com/engine/reference/commandline/attach/",
  counter: 0,
};

export const MainPage = () => {
  return (
    <div className={style.main}>
      <InputForm />
      <div className={style.box}>
        <div className={style.section}>Короткая ссылка</div>
        <div className={style.section}>Исходная ссылка</div>
        <div className={style.section}>Количество переходов</div>
      </div>
      <ul className={style.table_box}>
        <LinkTable
          short={testData.short}
          target={testData.target}
          counter={testData.counter}
        />
        <LinkTable
          short={testData.short}
          target={testData.target}
          counter={testData.counter}
        />
        <LinkTable
          short={testData.short}
          target={testData.target}
          counter={testData.counter}
        />
      </ul>
    </div>
  );
};
