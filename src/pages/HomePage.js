import Header from '../components/header/Header';
import MembersTable from '../components/table/MembersTable';

const HomePage = () => {
  const defaultSprint = {
    title: 'Sprint title',
    startDate: new Date('2022-02-02'),
    endDate: new Date('2022-02-25'),
    toDoTasks: [
      {
        id: 1,
        title: 'TASK',
        priority: 'High',
        description: 'Apriel inventory of supplies',
        img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
      }
    ]
  };

  return (
        <div>
            <Header sprint={defaultSprint}></Header>
            <MembersTable toDoTasks={defaultSprint.toDoTasks}></MembersTable>
        </div>
  );
};

export default HomePage;
