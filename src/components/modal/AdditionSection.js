import PropTypes from 'prop-types';
import StatusSelector from './StatusSelector';
import style from './additionSection.module.scss';

const AdditionSection = ({ task }) => {
  return (
    <div className={style.additionSection}>
      <StatusSelector task={task} />
      <h2 className={style.title}>Assignee</h2>
      <div className={style.member}>{task.member}</div>
    </div>
  );
};

AdditionSection.propTypes = {
  task: PropTypes.object.isRequired
};

export default AdditionSection;
