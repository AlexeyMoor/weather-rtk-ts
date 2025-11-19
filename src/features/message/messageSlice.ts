import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherAction.ts";

const messageSlice = createSlice({
  name: "message",
  initialState: 'Enter city name',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchWeather.pending, () => 'Pending...') // когда запрос в процессе
      .addCase(fetchWeather.rejected, (_state, action) => action.error.message) // когда запрос отклонен
      .addCase(fetchWeather.fulfilled, () => '') // когда запрос выполнен успешно, то сообщение очищается
  }
})

export default messageSlice.reducer;