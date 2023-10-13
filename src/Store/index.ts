import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector} from 'react-redux';
export const store = configureStore({
    reducer: rootReducer
  })
  

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch
export const useDispatch: () => AppDispatch = useAppDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector