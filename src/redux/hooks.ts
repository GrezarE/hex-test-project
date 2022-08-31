import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import type { RootState, AppDispatch, AppThunk } from "./store";

export const useAppDispatch: () => AppDispatch | AppThunk = dispatchHook;
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
