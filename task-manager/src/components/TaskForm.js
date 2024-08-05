import React from 'react';
import {TaskContext} from '../contexts/TaskContext';

function TaskForm() {
    const [task, setTask] = React.useState('');
    const {dispatch} = React.useContext(TaskContext);

    const addTask = (e) => { 
        dispatch({type: 'ADD_TASK', payload: {text:task, completed:false}}); 
        setTask(''); 
        e.preventDefault(); 
    }

  return (
    <form>
      <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} placeholder="Nueva tarea" />
      <button onClick={addTask} >Add Task</button>
    </form>
  );
}

export default TaskForm;