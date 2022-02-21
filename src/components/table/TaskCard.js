import PropTypes from 'prop-types';
import style from './taskCard.module.scss';

const TaskCard = ({ task: { id, title, priority, description, img } }) => {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <h2 className={style.title}>{id}-{title}</h2>
        <div className={style.description}>
          <div className={style.block}>{priority}</div>
          <div className={style.block}>{description}</div>
        </div>
      </div>
      <div className={style.img}><img src={img} alt='avatar'></img></div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskCard;
