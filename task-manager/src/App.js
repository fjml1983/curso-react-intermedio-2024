import './App.css';
import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList'; 
import { TaskProvider } from './contexts/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <header className="App-header">
          <h1>Task Manager</h1>
          <p>Coming soon...</p>

            <TaskForm />  
            <TaskList />

        </header>
      </div>
    </TaskProvider>    
  );
}

export default App;
