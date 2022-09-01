import React, { useState } from "react";
import style from "./sorting-header.module.css";
import { setOrderSort } from "../../redux/reducers/sortingSlice";
import { useAppDispatch } from "../../redux/hooks";

export const SortingHeader = () => {
  const [shortSort, setShortSort] = useState("asc_short");
  const [linkSort, setLinkSort] = useState("asc_target");
  const [countSort, setCountSort] = useState("asc_counter");
  const dispatch = useAppDispatch();

  const onShortClick = () => {
    const text = shortSort === "asc_short" ? "desc_short" : "asc_short";
    setShortSort(text);
    dispatch(setOrderSort(shortSort));
  };
  const onLinkClick = () => {
    const text = linkSort === "asc_target" ? "desc_target" : "asc_target";
    setLinkSort(text);
    dispatch(setOrderSort(linkSort));
  };
  const onCountClick = () => {
    const text = countSort === "asc_counter" ? "desc_counter" : "asc_counter";
    setCountSort(text);
    dispatch(setOrderSort(countSort));
  };

  return (
    <div className={style.box}>
      <div className={style.section} onClick={onShortClick}>
        Короткая ссылка
      </div>
      <div className={style.section} onClick={onLinkClick}>
        Исходная ссылка
      </div>
      <div className={style.section} onClick={onCountClick}>
        Количество переходов
      </div>
    </div>
  );
};
