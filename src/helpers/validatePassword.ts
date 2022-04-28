const validatePassword = (value: string): string => {
  if (value.length <= 6) {
    return 'Password should be longer than 6 symbols';
  } else if (value.length >= 20) {
    return 'Password should be less than 20 symbols';
  } else if (!value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/)) {
    return 'Password is incorrect';
  }
  return '';
};

export default validatePassword;
