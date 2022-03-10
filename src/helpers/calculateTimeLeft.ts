const calculateTimeLeft = (endDate: Date): number => {
  const difference = +endDate - +new Date();
  return difference > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : 0;
};

export default calculateTimeLeft;
