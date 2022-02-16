const calculateTimeLeft = (endDate) => {
  const difference = +endDate - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24))
    };
  } else {
    timeLeft = {
      days: 0
    };
  }
  return timeLeft;
};

export default calculateTimeLeft;
