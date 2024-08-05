import React from 'react';
import taskReducer from '../reducers/taskReducer';

const initialState = {tasks: []};

const TaskContext = React.createContext();
const TaskProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(taskReducer, initialState);
    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    );
}

export {TaskContext, TaskProvider};