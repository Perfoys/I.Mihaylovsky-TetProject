import React, { FC } from 'react';
import style from './input.module.scss';

type InputProps = {
  inputName: string,
  placeholder: string,
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ inputName, placeholder, value, handleChange }) => {
  return (
    <input className={style.input} name={inputName} onChange={handleChange} value={value} placeholder={placeholder} />
  );
};

export default Input;
