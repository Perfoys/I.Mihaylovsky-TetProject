import PropTypes from 'prop-types';
import Column from './Column';
import style from './membersTable.module.scss';
import { status } from '../../constants/status';

const MembersTable = ({ tasks }) => {
  return (
    <div className={style.table}>
      <Column
        title={status.TODO}
        titleStyle={style.toDo}
        tasks={tasks.filter(item => item && item.status === status.TODO)}
      />
      <Column
        title={status.INPROGRESS}
        titleStyle={style.inProgress}
        tasks={tasks.filter(item => item && item.status === status.INPROGRESS)}
      />
      <Column
        title={status.INREVIEW}
        titleStyle={style.inReview}
        tasks={tasks.filter(item => item && item.status === status.INREVIEW)}
      />
      <Column
        title={status.DONE}
        titleStyle={style.done}
        tasks={tasks.filter(item => item && item.status === status.DONE)}
      />
    </div>
  );
};

MembersTable.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default MembersTable;
