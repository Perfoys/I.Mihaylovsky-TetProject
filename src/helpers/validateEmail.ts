const validateEmail = (value: string): string => {
  if (value.length === 0) {
    return 'Input field can not be empty';
  } else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return 'Email is incorrect';
  }
  return '';
};

export default validateEmail;
