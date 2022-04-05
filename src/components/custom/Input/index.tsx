import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useState } from 'react';
import style from './input.module.scss';

type InputProps = {
  styleClass?: string,
  inputType: string,
  inputName: string,
  placeholder?: string,
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ styleClass, inputType, inputName, placeholder, value, handleChange }) => {
  const [state, setState] = useState({
    isValid: true,
    isFocus: false,
    error: ''
  });
  const showError = state.isFocus && !state.isValid;

  const handleValidation = useCallback(() => {
    let isValid = true;
    let currentError = '';

    if (value === '') {
      isValid = false;
      currentError = 'Input value can not be empty';
    }
    if (inputType === 'email' && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      isValid = false;
      currentError = 'Input value should be correct email';
    }
    if (inputType === 'number' && parseInt(value) < 0) {
      isValid = false;
      currentError = 'Input number can not be negative';
    }
    if (inputType === 'password' && value.length < 6) {
      isValid = false;
      currentError = 'Password length should be more than 6 symbols';
    }

    setState(state => ({ ...state, isValid: isValid, error: currentError }));
  }, [value]);

  const handleBlur = useCallback(() => {
    setState(state => ({ ...state, isFocus: false }));
  }, []);

  const handleFocus = useCallback(() => {
    setState(state => ({ ...state, isFocus: true }));
  }, []);

  useEffect(() => {
    handleValidation();
  }, [value]);

  return (
    <>
      {showError && <span className={style.error}>{state.error}</span>}
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
    </>
  );
};

export default Input;
