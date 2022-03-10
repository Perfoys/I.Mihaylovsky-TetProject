import { FC } from 'react';
import Column from './Column';
import style from './membersTable.module.scss';
import { status } from '../../constants/status';
import { ITask } from '../../types/sprint';
import Participants from './Participants';
import Wrapper from '../common/Wrapper';

type MembersTableProps = {
  members: Array<string>,
  tasks: Array<ITask>
};

const MembersTable: FC<MembersTableProps> = ({ members, tasks }: MembersTableProps) => {
  const filterTasks = (tasks: Array<ITask>, status: string) => tasks.filter(task => task.status === status);

  return (
    <Wrapper>
      <Participants members={members} />
      <div className={style.table}>
        <Column
          title={status.TODO}
          titleStyle={style.toDo}
          tasks={filterTasks(tasks, status.TODO)}
        />
        <Column
          title={status.INPROGRESS}
          titleStyle={style.inProgress}
          tasks={filterTasks(tasks, status.INPROGRESS)}
        />
        <Column
          title={status.INREVIEW}
          titleStyle={style.inReview}
          tasks={filterTasks(tasks, status.INREVIEW)}
        />
        <Column
          title={status.DONE}
          titleStyle={style.done}
          tasks={filterTasks(tasks, status.DONE)}
        />
      </div>
    </Wrapper>
  );
};

export default MembersTable;
