import PropTypes from 'prop-types';
import Column from './Column';
import style from './membersTable.module.scss';
import { status } from '../../constants/status';

const MembersTable = ({ tasks }) => {
  return (
    <div className={style.table}>
      <Column
        title={status.TODO}
        tasks={tasks.filter(item => item && item.status === status.TODO)}
      />
      <Column
        title={status.INPROGRESS}
        tasks={tasks.filter(item => item && item.status === status.INPROGRESS)}
      />
      <Column
        title={status.INREVIEW}
        tasks={tasks.filter(item => item && item.status === status.INREVIEW)}
      />
      <Column
        title={status.DONE}
        tasks={tasks.filter(item => item && item.status === status.DONE)}
      />
    </div>
  );
};

MembersTable.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default MembersTable;
