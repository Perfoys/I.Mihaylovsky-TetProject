import React, { useCallback, useState } from 'react';

type Field = {
  [key: string]: string
};

const useForm = (initialFields: Field) => {
  const [fields, setFields] = useState(initialFields);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields(state => ({ ...state, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setFields(initialFields);
  }, []);

  return {
    fields,
    handleChange,
    reset
  };
};

export default useForm;
