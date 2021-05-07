import { useSelector } from 'react-redux';
import SubmitTask from './components/SubmitTask';
import Task from "./components/Task";

import './App.css';

import { selectTaskList } from './state/task_list/taskListSlice';

function App() {
  // const taskListArr = useSelector(selectTaskList);
  // console.log(taskListArr);

  return (
    <div className="App">
      <section>
        <h1>Assessment #2 - The Todo List</h1>
        <SubmitTask />
        {/* {taskListArr.map((task, index) => {
          return <Task task={task} index={index} key={index}/>
        })} */}
      </section>
    </div>
  );
}

export default App;
