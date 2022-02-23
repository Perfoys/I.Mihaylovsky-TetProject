import PropTypes from 'prop-types';
import Column from './Column';
import style from './membersTable.module.scss';
import { status } from '../../constants/status';

const MembersTable = ({ tasks }) => {
  const filterTasks = (tasks, status) => tasks.filter(task => task.status === status);

  return (
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
  );
};

MembersTable.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default MembersTable;
