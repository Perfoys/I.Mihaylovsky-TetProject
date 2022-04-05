import React, { FC } from 'react';

type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  children: React.ReactNode
}

const Form: FC<FormProps> = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, child => {
        return React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<FC>) : child;
      })}
    </form>
  );
};

export default Form;
