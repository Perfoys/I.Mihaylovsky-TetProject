import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Select, { SingleValue } from 'react-select';
import { changeTaskStatus } from '../../../redux/reducers/sprintReducer';
import { ITaskInfo } from '../../../types/sprint';
import { options } from '../../../constants/status';
import style from './statusSelector.module.scss';

type StatusSelectorProps = {
  task: ITaskInfo
};
type OptionType = {
  value: string,
  label: string
};

const StatusSelector: FC<StatusSelectorProps> = ({ task }) => {
  const dispatch = useDispatch();
  const defaultOption: OptionType = { value: task.status, label: task.status };

  const handleChange = useCallback((option: SingleValue<OptionType>) => {
    if (option) {
      dispatch(changeTaskStatus({ item: task, title: option.value }));
    }
  }, []);

  return (
    <Select
      className={style.selection}
      options={options}
      onChange={handleChange}
      defaultValue={defaultOption}
    />
  );
};

export default StatusSelector;
