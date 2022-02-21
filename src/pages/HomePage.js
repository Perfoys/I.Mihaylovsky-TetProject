import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import MembersTable from '../components/table/MembersTable';

const HomePage = () => {
  const sprint = useSelector(state => state.sprint);

  return (
    <div>
      <Header sprint={sprint} />
      <MembersTable
        toDoTasks={sprint.toDoTasks}
        inProgressTasks={sprint.inProgressTasks}
        inReviewTasks={sprint.inReviewTasks}
        doneTasks={sprint.doneTasks}
      />
    </div>
  );
};

export default HomePage;
