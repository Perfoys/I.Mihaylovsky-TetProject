import { useState, useEffect } from 'react';
import calculateTimeLeft from '../helpers/calculateTimeLeft';

const Timer = () => {
  const endDate = new Date('2022-02-20');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(endDate));
  }, []);

  return (
      <div>
          Days left: {timeLeft.days}
      </div>
  );
};

export default Timer;
