import { FC } from 'react';
import Column from '../Column';
import style from './tasksTable.module.scss';
import { status } from '../../../constants/status';
import { ITask } from '../../../types/sprint';
import Participants from '../Participants';
import Wrapper from '../../general/Wrapper';

type TasksTableProps = {
  members: Array<string>,
  tasks: Array<ITask>
};

const TasksTable: FC<TasksTableProps> = ({ members, tasks }) => {
  const titleStyles = [style.toDo, style.inProgress, style.inReview, style.done];
  const filterTasks = (tasks: Array<ITask>, status: string) => tasks.filter(task => task.status === status);

  const createColumns = (tasks: Array<ITask>, status: Record<string, string>, style: Array<string>): React.ReactNode => {
    return Object.values(status).map((status, index) => {
      return (
        <Column key={index} title={status} titleStyle={style[index]} tasks={filterTasks(tasks, status)}/>
      );
    });
  };

  return (
    <Wrapper>
      <Participants members={members} />
      <div className={style.table}>
        {createColumns(tasks, status, titleStyles)}
      </div>
    </Wrapper>
  );
};

export default TasksTable;
