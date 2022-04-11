import React, { FC } from 'react';

type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  children: React.ReactNode
}

const Form: FC<FormProps> = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
