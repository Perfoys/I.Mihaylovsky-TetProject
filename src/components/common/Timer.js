import { useMemo } from 'react';
import PropTypes from 'prop-types';
import calculateTimeLeft from '../../helpers/calculateTimeLeft.js';

const Timer = ({ text, endDate }) => {
  const timeLeft = useMemo(() => calculateTimeLeft(endDate), [endDate]);

  return (
    <p>
      {text}: {timeLeft}
    </p>
  );
};

Timer.propTypes = {
  text: PropTypes.string.isRequired,
  endDate: PropTypes.object.isRequired
};

export default Timer;
