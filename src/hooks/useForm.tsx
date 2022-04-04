import React, { useState } from 'react';

type Field = {
  [key: string]: string
};

const useForm = (initialFields: Field) => {
  const [fields, setFields] = useState(initialFields);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields(state => ({ ...state, [name]: value }));
  };

  const reset = () => {
    setFields(initialFields);
  };

  return {
    fields,
    handleChange,
    reset
  };
};

export default useForm;
