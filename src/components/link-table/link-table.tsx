import React, { FC } from "react";
import style from "./link-table.module.css";

interface ILinkTable {
  short: string;
  target: string;
  counter: number;
}

export const LinkTable: FC<ILinkTable> = ({ short, target, counter }) => {
  // const onclick = () => {
  //   navigator.clipboard.writeText(`http://79.143.31.216/s/${short}`)
  // }

  return (
    <div className={style.box}>
      <a
        href={`http://79.143.31.216/s/${short}`}
        target="_blank"
        className={style.section}
        // onClick={onclick}
      >
        {`http://79.143.31.216/s/${short}`}
      </a>
      <a href={target} target="_blank" className={style.section}>
        {target}
      </a>
      <div className={style.section}>{counter}</div>
    </div>
  );
};
