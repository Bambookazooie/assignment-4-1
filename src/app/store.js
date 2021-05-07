import { configureStore } from '@reduxjs/toolkit';
import addTask from '../state/task_list/taskListSlice';

export default configureStore({
  reducer: {
    input: addTask,
  },
});
