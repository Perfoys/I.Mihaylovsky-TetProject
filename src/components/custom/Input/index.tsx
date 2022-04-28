import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import style from './input.module.scss';
import { InputType } from '../../../types/input';

type InputProps = {
  styleClass?: string,
  inputType: InputType,
  inputName: string,
  placeholder?: string,
  value: string,
  label?: string,
  error?: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ styleClass, inputType, inputName, placeholder, value, label, error, handleChange }) => {
  const [isFocus, setIsFocus] = useState(false);
  const handleBlur = useCallback(() => setIsFocus(false), []);
  const handleFocus = useCallback(() => setIsFocus(true), []);

  return (
    <>
      {label && <label>{label}</label>}
      <input
        className={classNames(style.input, styleClass)}
        type={inputType}
        name={inputName}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={value}
        placeholder={placeholder}
      />
      {isFocus && <span className={style.error}>{error}</span>}
    </>
  );
};

export default Input;
