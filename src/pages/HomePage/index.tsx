import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import Header from '../../components/custom/Header';
import TasksTable from '../../components/homepage/TasksTable';

const HomePage: FC = () => {
  const sprint = useSelector((state: RootState) => state.sprint);

  return (
    <div>
      <Header sprint={sprint} />
      <TasksTable members={sprint.members} tasks={sprint.tasks} />
    </div>
  );
};

export default HomePage;
