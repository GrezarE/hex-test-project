import React, { useEffect, useState } from "react";
import { InputForm } from "../components/input-form/input-form";
import style from "./main.module.css";
import { LinkTable } from "../components/link-table/link-table";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getStatistics } from "../redux/action/getStatistics";
import { Pagination } from "../components/pagination/pagination";
import { SortingHeader } from "../components/sorting-header/sorting-header";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((store) => store.user);
  const { order, offset, limit, length, linksArray } = useAppSelector(
    (store) => store.sort
  );
  const [arrayPage, setArrayPage] = useState<number[]>([]);

  const setPages = (length: number, limit: number) => {
    const pages = Math.ceil(length / limit);
    const arr = [];
    for (let i = 1; i <= pages; i++) {
      arr.push(i);
    }
    setArrayPage([...arr]);
  };

  useEffect(() => {
    dispatch(getStatistics(accessToken, "asc_short", 0, 0, "check"));
    setPages(length, limit);
  }, [linksArray]);

  useEffect(() => {
    dispatch(getStatistics(accessToken, order, offset, limit, "set"));
  }, [accessToken, order, offset, limit]);

  return (
    <div className={style.main}>
      <InputForm />
      <SortingHeader />
      <ul className={style.table_box}>
        {linksArray &&
          linksArray.map((item, index) => (
            <LinkTable
              short={item.short}
              target={item.target}
              counter={item.counter}
              key={index}
            />
          ))}
      </ul>
      <ul className={style.pagination}>
        {linksArray &&
          arrayPage.map((item) => <Pagination page={item} key={item} />)}
      </ul>
    </div>
  );
};
