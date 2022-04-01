import React, { useReducer } from 'react';

type Field = {
  name: string,
  value: string
};

type Action = {
  type: 'RESET' | 'SUCCESS',
  payload: Field
}

const useForm = (initialFields: any) => {
  const reducer = (state: typeof initialFields, action: Action) => {
    const { type, payload } = action;
    switch (type) {
    case 'RESET':
      return initialFields;
    case 'SUCCESS':
      return { ...state, [payload.name]: [payload.value] };
    default:
      return { ...state };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialFields);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SUCCESS', payload: { name: event.target.name, value: event.target.value } });
  };
  const reset = () => {
    dispatch({ type: 'RESET', payload: initialFields });
  };

  return {
    state,
    bind: {
      onChange: handleChange
    },
    reset
  };
};

export default useForm;
