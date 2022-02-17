const initialState = {
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

const sprintReducer = (state = initialState, action) => ({ ...state });

export default sprintReducer;
