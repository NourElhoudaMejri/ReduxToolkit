import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import {apiSlice} from '../features//dogs/dogsApi'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware(apiSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export  type RootState = ReturnType<typeof store.getState>
