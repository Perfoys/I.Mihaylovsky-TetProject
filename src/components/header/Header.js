import style from './header.module.scss';
import Timer from './Timer';

const Header = () => {
  const startDate = new Date('2022-02-02');
  const endDate = new Date('2022-02-20');

  return (
        <header className={style.header}>
            <h1 className={style.title}>Sprint name</h1>
            <div>{ startDate.toDateString() }</div>
            <div>{ endDate.toDateString() }</div>
            <Timer/>
        </header>
  );
};

export default Header;
