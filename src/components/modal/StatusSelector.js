import PropTypes from 'prop-types';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../../reducers/sprintReducer';
import { options } from '../../constants/status';
import style from './statusSelector.module.scss';

const StatusSelector = ({ task }) => {
  const dispatch = useDispatch();
  const currentOption = { value: task.status, label: task.status };

  const handleChange = (event) => {
    dispatch(changeTaskStatus({ item: task, title: event.value }));
  };

  return (
    <Select
      className={style.selection}
      options={options}
      onChange={handleChange}
      defaultValue={currentOption}
    />
  );
};

StatusSelector.propTypes = {
  task: PropTypes.object.isRequired
};

export default StatusSelector;
