import PropTypes from 'prop-types';
import TaskCard from './TaskCard';

const Column = (props) => {
  return (
        <div>
            <h1>{props.title}</h1>
            <TaskCard></TaskCard>
        </div>
  );
};

Column.propTypes = {
  title: PropTypes.string
};

export default Column;
