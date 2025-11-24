export interface WeatherInfo {
  country: string,
  city: string,
  temp: number,
  pressure: number,
  sunset: string
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