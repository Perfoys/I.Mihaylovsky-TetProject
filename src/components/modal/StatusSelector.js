import PropTypes from 'prop-types';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { changeTaskStatus } from '../../reducers/sprintReducer';
import { status as statuses } from '../../constants/status';
import style from './statusSelector.module.scss';

const StatusSelector = ({ id, status }) => {
  const dispatch = useDispatch();
  const currentOption = { value: status, label: status };
  const createOptions = (statuses) => {
    return Object.values(statuses).map(status => {
      return { value: status, label: status };
    });
  };

  const handleChange = (event) => {
    dispatch(changeTaskStatus({ item: { id }, title: event.value }));
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
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
};

export default StatusSelector;
