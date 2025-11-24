import {configureStore} from "@reduxjs/toolkit";
import city from "../features/city/citySlice.ts";
import {weatherApi} from "../features/api/weatherAction.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    city,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware)),
})

setupListeners(store.dispatch);
// window.addEventListener('focus', () => store.dispatch(weatherApi.util.resetApiState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
