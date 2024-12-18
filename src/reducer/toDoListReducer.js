

export default function toDoListReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [{ title: action.payload.newTask, completed: false }, ...state]; //add new task to the beginning of the array
        case 'DELETE_TASK':
            return state.filter((task, index) => index !== action.payload.index); // filter out the task that matches the index of the task to be deleted
        case 'TOGGLE_TASK':
            return state.map((task, index) => index === action.payload.index ? { ...task, completed: !task.completed } : task); //toggle the completed status of the task that matches the index
        case 'MOVE_TASK_UP':
            // move only if the task is not the first task
            if (action.payload.index !== 0) {
                const newState = [...state];
                const temp = newState[action.payload.index - 1]
                newState[action.payload.index - 1] = newState[action.payload.index];
                newState[action.payload.index] = temp;
                return newState;
            }
            return state;  // return the state if the task is the first task (no change)
        case 'MOVE_TASK_DOWN':
            // move only if the task is not the last task
            if (action.payload.index !== state.length - 1) {
                const newState = [...state];
                const temp = newState[action.payload.index + 1]
                newState[action.payload.index + 1] = newState[action.payload.index];
                newState[action.payload.index] = temp;
                return newState;
            }
            return state; // return the state if the task is the last task (no change)
        default:
            return state;
    }
}