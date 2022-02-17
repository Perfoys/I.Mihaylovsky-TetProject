import PropTypes from 'prop-types';
import Column from './Column';
import style from './membersTable.module.scss';

const MembersTable = ({ toDoTasks }) => {
  return (
    <div className={style.table}>
      <Column title="To do" tasks={toDoTasks}></Column>
      <Column title="In Progress" tasks={toDoTasks}></Column>
      <Column title="In Review" tasks={toDoTasks}></Column>
      <Column title="Done" tasks={toDoTasks}></Column>
    </div>
  );
};

MembersTable.propTypes = {
  toDoTasks: PropTypes.array.isRequired
};

export default MembersTable;
