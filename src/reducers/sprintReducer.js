import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Sprint title',
  startDate: new Date('2022-02-02'),
  endDate: new Date('2022-02-25'),
  members: [
    'Name Surname',
    'Tom Talkins',
    'Harry Gudini'
  ],
  tasks: [
    {
      id: 1,
      order: 1,
      status: 'To Do',
      title: 'TASK',
      priority: 'High',
      description: 'Apriel inventory of supplies',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    },
    {
      id: 2,
      order: 2,
      status: 'In Progress',
      title: 'TASK',
      priority: 'Medium',
      description: 'March inventory of supplies',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    },
    {
      id: 5,
      order: 3,
      status: 'In Progress',
      title: 'TASK',
      priority: 'Medium',
      description: 'May inventory of supplies',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    },
    {
      id: 3,
      order: 4,
      status: 'In Review',
      title: 'TASK',
      priority: 'High',
      description: 'Modify report templates',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    },
    {
      id: 4,
      order: 5,
      status: 'Done',
      title: 'TASK',
      priority: 'High',
      description: 'Metrics report for August',
      member: 'Name Surname',
      deadline: new Date('2022-03-01'),
      img: 'https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png'
    }
  ]
};

const sliceSprintName = 'sprint';

const sprintSlice = createSlice({
  name: sliceSprintName,
  initialState,
  reducers: {
    changeTaskStatus: (state, action) => {
      const { item, title } = action.payload;
      const taskItem = state.tasks.find(i => i.id === item.id);
      taskItem.status = title;
    },
    changeTaskOrder: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const currentTask = state.tasks.find(task => task.id === dragIndex);
      const nextTask = state.tasks.find(task => task.id === hoverIndex);
      state.tasks.splice(currentTask.order - 1, 1);
      state.tasks.splice(nextTask.order - 1, 0, currentTask);
      [currentTask.order, nextTask.order] = [nextTask.order, currentTask.order];
    }
  }
});

export const { changeTaskStatus, changeTaskOrder } = sprintSlice.actions;
export default sprintSlice.reducer;
