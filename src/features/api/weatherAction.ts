import {api_key, base_url} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {WeatherInfo} from "../../utils/types";

interface WeatherApiResponse {
  sys: { country: string; sunset: number };
  name: string;
  main: { temp: number; pressure: number };
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({baseUrl: base_url}),
  keepUnusedDataFor: 300, // 300sec. = 5min cache data
  endpoints: builder => ({
    getWeatherByCity: builder.query({
      query: city => `?q=${city}&appid=${api_key}&units=metric`,
      transformResponse: (response: WeatherApiResponse): WeatherInfo => ({
        country: response.sys.country,
        city: response.name,
        temp: response.main.temp,
        pressure: response.main.pressure,
        sunset: response.sys.sunset,
      }),
    }),
  }),
});

export const {useGetWeatherByCityQuery} = weatherApi;
