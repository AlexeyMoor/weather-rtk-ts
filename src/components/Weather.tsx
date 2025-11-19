import {useAppSelector} from "../app/hooks.ts";

const Weather = () => {
  const weather = useAppSelector(state => state.weather);
  const message = useAppSelector(state => state.message);

  if (message) {
    return (
      <div className={'infoWeath'}>
        {message}
      </div>
    )
  } else {
    return (
      <div className={'infoWeath'}>
        <p>Location: {weather.country}, {weather.city}</p>
        <p>Temp: {weather.temp}</p>
        <p>Pressure: {weather.pressure}</p>
        <p>Sunset: {weather.sunset?.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Weather;