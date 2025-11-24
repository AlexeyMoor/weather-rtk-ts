export interface WeatherInfo {
  country: string,
  city: string,
  temp: number,
  pressure: number,
  sunset: Date
}

export interface WeatherInfoResponse {
  name: string,
  main: {
    temp: number,
    pressure: number
  },
  sys: {
    sunset: number,
    country: string,
  },
}