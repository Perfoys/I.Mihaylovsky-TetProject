const initialState = {
  title: 'Sprint title',
  startDate: new Date('2022-02-02'),
  endDate: new Date('2022-02-25'),
  members: [
    'Name Surname',
    'Tom Talkins',
    'Harry Gudini'
  ],
  toDoTasks: [
    {
      id: 1,
      title: 'TASK',
      priority: 'High',
      description: 'Apriel inventory of supplies',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    }
  ],
  inProgressTasks: [
    {
      id: 2,
      title: 'TASK',
      priority: 'Medium',
      description: 'March inventory of supplies',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    },
    {
      id: 5,
      title: 'TASK',
      priority: 'Medium',
      description: 'May inventory of supplies',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    }
  ],
  inReviewTasks: [
    {
      id: 3,
      title: 'TASK',
      priority: 'High',
      description: 'Modify report templates',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    }
  ],
  doneTasks: [
    {
      id: 4,
      title: 'TASK',
      priority: 'High',
      description: 'Metrics report for August',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    }
  ]
};

const sprintReducer = (state = initialState, action) => ({ ...state });

export default sprintReducer;
