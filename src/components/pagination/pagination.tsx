import React from "react";
import style from "./pagination.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setOffsetSort } from "../../redux/reducers/sortingSlice";

export const Pagination = ({ page }: { page: number }) => {
  const { limit } = useAppSelector((store) => store.sort);
  const dispatch = useAppDispatch();

  const onClick = () => {
    const offset = page * limit - limit;
    dispatch(setOffsetSort(offset));
  };

  return (
    <li className={style.page} onClick={onClick}>
      {page}
    </li>
  );
};
