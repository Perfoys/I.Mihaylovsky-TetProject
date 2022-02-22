import PropTypes from 'prop-types';
import style from './header.module.scss';
import Timer from '../common/Timer';

const Header = ({ sprint }) => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>{ sprint.title }</h1>
      <div>{ sprint.startDate.toDateString() }</div>
      <div>{ sprint.endDate.toDateString() }</div>
      <div>Days left: <Timer endDate={sprint.endDate} /></div>
    </header>
  );
};

Header.propTypes = {
  sprint: PropTypes.object.isRequired
};

export default Header;
