import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import calculateTimeLeft from '../../helpers/calculateTimeLeft.js';

const Timer = ({ endDate }) => {
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

Timer.propTypes = {
  endDate: PropTypes.object
};

export default Timer;
