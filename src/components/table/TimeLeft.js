import { useMemo } from 'react';
import PropTypes from 'prop-types';
import calculateTimeLeft from '../../helpers/calculateTimeLeft.js';

const TimeLeft = ({ endDate }) => {
  const timeLeft = useMemo(() => calculateTimeLeft(endDate), [endDate]);

  return (
    <p>
      Time left: {timeLeft}d
    </p>
  );
};

TimeLeft.propTypes = {
  endDate: PropTypes.object.isRequired
};

export default TimeLeft;
