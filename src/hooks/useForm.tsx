import React, { useReducer } from 'react';

type Field = {
  name: string,
  value: string
};

type Action = {
  type: 'reset' | 'success',
  payload: Field
}

const useForm = (initialFields: any) => {
  const reducer = (state: typeof initialFields, action: Action) => {
    const { type, payload } = action;
    switch (type) {
    case 'reset':
      return initialFields;
    case 'success':
      return { ...state, [payload.name]: [payload.value] };
    default:
      return { ...state };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialFields);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'success', payload: { name: event.target.name, value: event.target.value } });
  };
  const reset = () => {
    dispatch({ type: 'reset', payload: initialFields });
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
