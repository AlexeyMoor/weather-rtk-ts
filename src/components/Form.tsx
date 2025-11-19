import {fetchWeather} from "../features/api/weatherAction.ts";
import {useAppDispatch} from "../app/hooks.ts";
import type {FormEvent} from "react";

const Form = () => {
  const dispatch = useAppDispatch();

  const handleClickSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = e.currentTarget.city.value.trim();
    dispatch(fetchWeather(city));
  }

  return (
    <form onSubmit={handleClickSubmit}>
      <input type={'text'} name={'city'}/>
      <button type={'submit'}>Get Weather</button>
    </form>
  );
};

export default Form;