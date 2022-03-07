import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../../reducers/sprintReducer';
import style from './statusSelector.module.scss';

const StatusSelector = ({ task }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeTaskStatus({ item: task, title: event.target.value }));
  };

  return (
    <select className={style.selection} onChange={handleChange} value={task.status}>
      <option>To Do</option>
      <option>In Progress</option>
      <option>In Review</option>
      <option>Done</option>
    </select>
  );
};

StatusSelector.propTypes = {
  task: PropTypes.object.isRequired
};

export default StatusSelector;
