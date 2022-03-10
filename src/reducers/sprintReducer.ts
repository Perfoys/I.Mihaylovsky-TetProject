import { createSlice } from '@reduxjs/toolkit';
import { initialSprint } from '../data/initialSprint';
import { ISprint } from '../types/sprint';

const initialState: ISprint = initialSprint;

const sliceSprintName = 'sprint';

const sprintSlice = createSlice({
  name: sliceSprintName,
  initialState,
  reducers: {
    changeTaskStatus: (state, action) => {
      const { item, title } = action.payload;
      const taskItem = state.tasks.find(i => i.id === item.id);
      if (taskItem) {
        taskItem.status = title;
      }
    },
    changeTaskOrder: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const currentTask = state.tasks.find(task => task.id === dragIndex);
      const nextTask = state.tasks.find(task => task.id === hoverIndex);
      if (currentTask && nextTask) {
        const currentIndex = state.tasks.indexOf(currentTask);
        const nextIndex = state.tasks.indexOf(nextTask);
        state.tasks.splice(currentIndex, 1);
        state.tasks.splice(nextIndex, 0, currentTask);
      }
    },
    addComment: (state, action) => {
      const { taskId, text, author } = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.comments.push({
          id: task.comments.length + 1,
          text: text,
          author: author,
          date: new Date()
        });
      }
    }
  }
});

export const { changeTaskStatus, changeTaskOrder, addComment } = sprintSlice.actions;
export default sprintSlice.reducer;
