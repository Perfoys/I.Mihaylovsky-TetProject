import classNames from 'classnames';
import { useCallback, FC } from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskStatus, changeTaskOrder } from '../../reducers/sprintReducer';
import { ITask } from '../../types/sprint';
import TaskCard from './TaskCard';
import style from './column.module.scss';
import DropWrapper from './DropWrapper';

type ColumnProps = {
  title: string,
  titleStyle: string,
  tasks: Array<ITask>
};

const Column: FC<ColumnProps> = ({ title, titleStyle, tasks }: ColumnProps) => {
  const dispatch = useDispatch();

  const moveCard = useCallback((dragIndex, hoverIndex, status) => {
    if (status === title) {
      dispatch(changeTaskOrder({ dragIndex: dragIndex, hoverIndex: hoverIndex }));
    }
  }, [tasks]);

  const onDrop = useCallback((item, title) => {
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

export default Column;
