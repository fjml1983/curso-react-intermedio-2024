const taskReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {tasks: [...state.tasks, action.payload]};
        case 'TOGGLE_TASK':
            return { tasks: state.tasks.map((task, index) =>  
                (index === action.payload)?  {...task, completed: !task.completed} : task
            )};
        case 'DELETE_TASK':
            return { tasks: state.tasks.filter((task, index) => index !== action.payload)};
        default:
            return state;
    }
}

export default taskReducer;