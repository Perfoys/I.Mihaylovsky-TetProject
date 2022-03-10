import React, { FC } from 'react';
import style from './wrapper.module.scss';

type WrapperProps = {
  children: React.ReactNode
};

const Wrapper: FC<WrapperProps> = ({ children }: WrapperProps) => {
  return (
    <div className={style.wrapper}>
      {React.Children.map(children, child => {
        return React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<FC>) : child;
      })}
    </div>
  );
};

export default Wrapper;
