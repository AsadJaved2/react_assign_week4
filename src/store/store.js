import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weatherSlice';
import { weatherAPI } from '../services/weatherAPI';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherAPI.middleware),
});

export default store;
