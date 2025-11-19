import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherAction.ts";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {} as WeatherInfo,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.fulfilled, (_state, action) => action.payload)
  }
})

export default weatherSlice.reducer;