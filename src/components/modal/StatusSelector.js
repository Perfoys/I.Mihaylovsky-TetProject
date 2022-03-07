import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../../reducers/sprintReducer';
import style from './statusSelector.module.scss';

const StatusSelector = ({ id, status }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeTaskStatus({ item: { id }, title: event.target.value }));
  };

  return (
    <select className={style.selection} onChange={handleChange} value={status}>
      <option value='To Do'>To Do</option>
      <option value='In Progress'>In Progress</option>
      <option value='In Review'>In Review</option>
      <option value='Done'>Done</option>
    </select>
  );
};

StatusSelector.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
};

export default StatusSelector;
