const validateNumber = (value: string): boolean | string => {
  if (value.length === 0) {
    return 'Input field can not be empty';
  } else if (parseInt(value) < 0) {
    return 'Number can not be negative';
  }
  return true;
};

export default validateNumber;
