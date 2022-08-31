import React, { FC } from "react";
import { Link } from "react-router-dom";
import style from "./link-table.module.css";

interface ILinkTable {
  short: string;
  target: string;
  counter: number;
}

export const LinkTable: FC<ILinkTable> = ({ short, target, counter }) => {
  return (
    <div className={style.box}>
      <a href={short} target="_blank" className={style.section}>
        {short}
      </a>
      <a href={target} target="_blank" className={style.section}>
        {target}
      </a>
      <div className={style.section}>{counter}</div>
    </div>
  );
};
