import React from 'react';
import {TaskContext} from '../contexts/TaskContext';

function TaskList() {
    const {state,dispatch} = React.useContext(TaskContext);

    const toggleTask = React.useCallback((index) => {
        dispatch({type: 'TOGGLE_TASK', payload: index});
    }, [dispatch]);

    const deleteTask = React.useCallback((index) => {
        dispatch({type: 'DELETE_TASK', payload: index});
    }, [dispatch]);


  return (
    <div>
      <h2>Task List</h2>
        <ul>
            {state.tasks.map((task, index) => (
            <li key={index}>
                <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} />
                <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.text}</span>
                <button onClick={() => deleteTask(index)}>❌</button>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default TaskList;