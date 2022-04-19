const validateText = (value: string): boolean | string => {
  if (value.length === 0) {
    return 'Input field can not be empty';
  } else if (value.length > 120) {
    return 'Input value can not be more than 120 symbols';
  }
  return true;
};

export default validateText;
