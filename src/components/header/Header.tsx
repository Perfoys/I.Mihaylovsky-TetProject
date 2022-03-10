import { FC } from 'react';
import { ISprint } from '../../types/sprint';
import style from './header.module.scss';
import Timer from '../common/Timer';
import Wrapper from '../common/Wrapper';

type HeaderProps = {
  sprint: ISprint
};

const Header: FC<HeaderProps> = ({ sprint }: HeaderProps) => {
  return (
    <header className={style.header}>
      <Wrapper>
        <div className={style.headerWrap}>
          <h1 className={style.title}>{ sprint.title }</h1>
          <div>Start date: { sprint.startDate.toDateString() }</div>
          <div>End date: { sprint.endDate.toDateString() }</div>
          <Timer text={'Days left'} endDate={sprint.endDate} />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
