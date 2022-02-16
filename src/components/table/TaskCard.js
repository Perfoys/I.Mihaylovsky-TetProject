import PropTypes from 'prop-types';
import style from './taskCard.module.scss';

const TaskCard = ({ id, title, priority, description, img }) => {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <h2 className={style.title}>{id}-{title}</h2>
        <div className={style.description}>
          <div>{priority}</div>
          <div>{description}</div>
        </div>
      </div>
      <div className={style.img}><img src={img} alt='avatar'></img></div>
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default TaskCard;
