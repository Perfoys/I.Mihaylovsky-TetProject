import PropTypes from 'prop-types';
import Comments from './Comments';
import style from './mainSection.module.scss';

const MainSection = ({ task }) => {
  return (
    <div className={style.mainSection}>
      <div className={style.title}>{task.title}</div>
      <h2 className={style.header2}>Description</h2>
      <div className={style.description}>{task.description}</div>
      <Comments taskId={task.id} author={task.member} comments={task.comments} />
    </div>
  );
};

MainSection.propTypes = {
  task: PropTypes.object.isRequired
};

export default MainSection;
