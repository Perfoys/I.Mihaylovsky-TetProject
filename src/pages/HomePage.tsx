import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';
import Header from '../components/header/Header';
import MembersTable from '../components/table/MembersTable';

const HomePage: FC = () => {
  const sprint = useSelector((state: RootState) => state.sprint);

  return (
    <div>
      <Header sprint={sprint} />
      <MembersTable members={sprint.members} tasks={sprint.tasks} />
    </div>
  );
};

export default HomePage;
