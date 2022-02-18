import PropTypes from 'prop-types';
import Column from './Column';
import style from './membersTable.module.scss';

const MembersTable = ({ toDoTasks, inProgressTasks, inReviewTasks, doneTasks }) => {
  return (
    <div className={style.table}>
      <Column title="To do" tasks={toDoTasks} />
      <Column title="In Progress" tasks={inProgressTasks} />
      <Column title="In Review" tasks={inReviewTasks} />
      <Column title="Done" tasks={doneTasks} />
    </div>
  );
};

MembersTable.propTypes = {
  toDoTasks: PropTypes.array.isRequired,
  inProgressTasks: PropTypes.array.isRequired,
  inReviewTasks: PropTypes.array.isRequired,
  doneTasks: PropTypes.array.isRequired
};

export default MembersTable;
