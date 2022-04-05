import classNames from 'classnames';
import React, { FC } from 'react';
import style from './input.module.scss';

type InputProps = {
  styleClass?: string,
  inputName: string,
  placeholder?: string,
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ styleClass, inputName, placeholder, value, handleChange }) => {
  return (
    <input
      className={classNames(style.input, styleClass)}
      name={inputName}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
