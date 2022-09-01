import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILink {
  id: number;
  short: string;
  target: string;
  counter: number;
}

interface ISortingSlice {
  order: string;
  offset: number;
  limit: number;
  linksArray: ILink[] | null;
  length: number;
}

const initialState: ISortingSlice = {
  order: "asc_short",
  offset: 0,
  limit: 5,
  linksArray: [],
  length: 0,
};

export const sortingSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setOrderSort: (store, action: PayloadAction<string>) => ({
      ...store,
      order: action.payload,
    }),
    setOffsetSort: (store, action: PayloadAction<number>) => ({
      ...store,
      offset: action.payload,
    }),
    setLimitSort: (store, action: PayloadAction<number>) => ({
      ...store,
      limit: action.payload,
    }),
    setAllSort: (store, action: PayloadAction<ISortingSlice>) => ({
      ...store,
      order: action.payload.order,
      offset: action.payload.offset,
      limit: action.payload.limit,
    }),
    setAllLinks: (store, action: PayloadAction<ILink[]>) => ({
      ...store,
      linksArray: action.payload,
    }),
    addLink: (store, action: PayloadAction<ILink[]>) => ({
      ...store,
      linksArray: action.payload,
    }),
    setLength: (store, action: PayloadAction<number>) => ({
      ...store,
      length: action.payload,
    }),
  },
});

export const {
  setOrderSort,
  setOffsetSort,
  setLimitSort,
  setAllLinks,
  setAllSort,
  addLink,
  setLength,
} = sortingSlice.actions;
export const sortingReducer = sortingSlice.reducer;
