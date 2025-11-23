import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherAction.ts";

const Weather = () => {
  const city = useAppSelector(state => state.city);
  const {data, error, isLoading} = useGetWeatherByCityQuery(city, { skip: !city });

  if (!city) {
    return <div className={'infoWeath'}>Enter a city name</div>
  }

  if (isLoading) {
    return <div className={'infoWeath'}>Loading...</div>
  }

  if (error) {
    return <div className={'infoWeath error-text'}>Enter correct city name!</div>
  }

  return (
    <div className={'infoWeath'}>
      {!!data && // !! преобразование значения в булево (true/false) для проверки наличия данных
        <>
          <p>Location: {data.country}, {data.city}</p>
          <p>Temp: {data.temp}</p>
          <p>Pressure: {data.pressure}</p>
          <p>Sunset: {new Date(data.sunset * 1000).toLocaleTimeString()}</p>
        </>
      }
    </div>
  )
}

export default Weather;