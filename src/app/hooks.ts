import { TypedUseSelectorHook, useDispatch,useSelector } from 'react-redux';
//import store from './store';
import  { AppDispatch, RootState } from './store';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: typedUseSelectorHook<RootState>= useSelector;
