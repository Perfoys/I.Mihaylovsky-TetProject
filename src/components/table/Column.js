import PropTypes from 'prop-types';
import TaskCard from './TaskCard';
import style from './column.module.scss';

const Column = ({ title, tasks }) => {
  return (
    <div className={style.column}>
      <h1 className={style.title}>{title}</h1>
      {tasks.map(item => (
        <TaskCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          priority={item.priority}
          img={item.img}
        />
      ))}
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired
};

export default Column;
