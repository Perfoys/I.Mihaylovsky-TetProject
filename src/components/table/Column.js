import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskStatus, changeTaskOrder } from '../../reducers/sprintReducer';
import TaskCard from './TaskCard';
import style from './column.module.scss';
import DropWrapper from './DropWrapper';

const Column = ({ title, titleStyle, tasks }) => {
  const dispatch = useDispatch();

  const moveCard = useCallback((dragIndex, hoverIndex, status) => {
    if (status === title) {
      dispatch(changeTaskOrder({ dragIndex: dragIndex, hoverIndex: hoverIndex }));
    }
  }, [tasks]);

  const onDrop = useCallback((item, monitor, title) => {
    if (item.status !== title) {
      dispatch(changeTaskStatus({ item: item, title: title }));
    }
  }, [tasks]);

  return (
    <div className={style.column}>
      <h1 className={classNames(style.title, titleStyle)}>{title}</h1>
      <DropWrapper onDrop={onDrop} title={title}>
        {tasks.map(task => (
          task && <TaskCard key={task.id} task={task} moveCard={moveCard} />
        ))}
      </DropWrapper>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired
};

export default Column;
