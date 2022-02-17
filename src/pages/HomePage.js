import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import MembersTable from '../components/table/MembersTable';

const HomePage = () => {
  const sprint = useSelector(state => state.sprint);

  return (
    <div>
      <Header sprint={sprint}></Header>
      <MembersTable toDoTasks={sprint.toDoTasks}></MembersTable>
    </div>
  );
};

export default HomePage;
