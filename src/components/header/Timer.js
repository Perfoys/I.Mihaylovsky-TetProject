import { useMemo } from 'react';
import PropTypes from 'prop-types';
import calculateTimeLeft from '../../helpers/calculateTimeLeft.js';

const Timer = ({ endDate }) => {
  const timeLeft = useMemo(() => calculateTimeLeft(endDate), [endDate]);

  return (
    <p>
      Days left: {timeLeft}
    </p>
  );
};

Timer.propTypes = {
  endDate: PropTypes.object.isRequired
};

export default Timer;
