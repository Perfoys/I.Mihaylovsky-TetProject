import { useMemo, FC } from 'react';
import calculateTimeLeft from '../../helpers/calculateTimeLeft';
import style from './timer.module.scss';

type TimerProps = {
  text: string,
  endDate: Date
};

const Timer: FC<TimerProps> = ({ text, endDate }: TimerProps) => {
  const timeLeft = useMemo(() => calculateTimeLeft(endDate), [endDate]);

  return (
    <p className={style.timer}>
      {text}: {timeLeft}
    </p>
  );
};

export default Timer;
