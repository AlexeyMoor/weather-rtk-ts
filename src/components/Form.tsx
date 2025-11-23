import {useAppDispatch} from "../app/hooks.ts";
import type {FormEvent} from "react";
import {setCity} from "../features/city/citySlice.ts";

const Form = () => {
  const dispatch = useAppDispatch();

  const handleClickSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const city = e.currentTarget.city.value.trim();
    dispatch(setCity(city));
  }

  return (
    <form onSubmit={handleClickSubmit}>
      <input type={'text'} name={'city'} placeholder={'Enter a city name...'}/>
      <button type={'submit'}>Get Weather</button>
    </form>
  );
};

export default Form;