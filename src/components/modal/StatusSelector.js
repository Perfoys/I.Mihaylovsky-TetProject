import PropTypes from 'prop-types';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../../reducers/sprintReducer';
import { status as statuses } from '../../constants/status';
import style from './statusSelector.module.scss';

const StatusSelector = ({ task }) => {
  const dispatch = useDispatch();
  const currentOption = { value: task.status, label: task.status };
  const createOptions = (statuses) => {
    return Object.values(statuses).map(status => {
      return { value: status, label: status };
    });
  };

  const handleChange = (event) => {
    dispatch(changeTaskStatus({ item: task, title: event.value }));
  };

  return (
    <Select
      className={style.selection}
      options={createOptions(statuses)}
      onChange={handleChange}
      defaultValue={currentOption}
    />
  );
};

StatusSelector.propTypes = {
  task: PropTypes.object.isRequired
};

export default StatusSelector;
