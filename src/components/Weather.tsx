import {useAppSelector} from "../app/hooks.ts";
import {useGetWeatherByCityQuery} from "../features/api/weatherAction.ts";

const Weather = () => {
  const city = useAppSelector(state => state.city);
  const {data, error, isLoading} = useGetWeatherByCityQuery(city, {
    skip: !city,
    refetchOnFocus: true,
    pollingInterval: 600_000, // 30 seconds
    skipPollingIfUnfocused: true, // stop polling when the window is not focused
  });

  if (!city) {
    return <div className={'infoWeath'}>Enter city name</div>
  }

  if (isLoading) {
    return <div className={'infoWeath'}>Loading...</div>
  }

  if (error) {
    return <div className={'infoWeath error-text'}>Enter correct city name!</div>
  }

  return (
    <div className={'infoWeath'}>
      {!!data &&
        <>
          <p>Location: {data.country}, {data.city}</p>
          <p>Temp: {data.temp}</p>
          <p>Pressure: {data.pressure}</p>
          <p>Sunset: {data.sunset}</p>
        </>
      }
    </div>
  )
}

export default Weather;