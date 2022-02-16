import PropTypes from 'prop-types';
import style from './taskCard.module.scss';

const TaskCard = ({ id, title, priotity, description, img }) => {
  return (
        <div className={style.card}>
            <div className={style.info}>
              <h2 className={style.title}>{id} {title}</h2>
              <div className={style.description}>
                <div>{priotity}</div>
                <div>{description}</div>
              </div>
            </div>
            <div className={style.img}><img src={img} alt='avatar'></img></div>
        </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  priotity: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string
};

export default TaskCard;
