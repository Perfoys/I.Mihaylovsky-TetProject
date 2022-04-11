import React, { useCallback, useState } from 'react';

type Field = {
  [key: string]: string
};

type Error = {
  [key: string]: string
}

const useForm = (defaultValues: Field) => {
  const [state, setState] = useState(defaultValues);
  const [errors, setErrors] = useState<Error>({});

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState(state => ({ ...state, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setState(defaultValues);
  }, []);

  const handleValidation = (data: object): boolean => {
    let isValid = true;
    const currentErrors: Error = {};
    const values = Object.entries(data);

    values.forEach((value: [string, any]) => {
      if (value[1].length === 0) {
        isValid = false;
        currentErrors[value[0]] = 'Input value can not be empty';
      }
      if (value[1].length > 120) {
        isValid = false;
        currentErrors[value[0]] = 'Value length can not be more than 120 symbols';
      }
      if (parseInt(value[1]) < 0) {
        isValid = false;
        currentErrors[value[0]] = 'Input number can not be negative';
      }
    });

    setErrors(currentErrors);
    return isValid;
  };

  const handleSubmit = useCallback((onSubmit: React.FormEventHandler<HTMLFormElement>) => (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleValidation(state)) onSubmit(event);
  }, [state]);

  return {
    values: state,
    errorMessage: errors,
    handleChange,
    handleSubmit,
    reset
  };
};

export default useForm;
