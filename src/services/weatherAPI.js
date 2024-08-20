import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => `weather?q=${city}&units=metric&appid=255d06d9f1f1ce2b76977e6bd05e79d4`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherAPI;
