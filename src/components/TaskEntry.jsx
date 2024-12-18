import React from "react";
import Button from "./Button";
function TaskEntry({ task, index, dispatch }) {
  return (
    <>
      <div className="task-entry">
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch({ type: "TOGGLE_TASK", payload: { index } })}
          id={`task-${index}`} //id to connect the label
        />
        <label style={{fontSize: '1.5em'  }} htmlFor={`task-${index}`}>{task.title}</label>
       
        <button className="move-up-button"
          onClick={() =>
            dispatch({
              type: "MOVE_TASK_UP",
              payload: { index },
            })
          }
        >
          ↑
        </button>
        <button className="move-up-button"
          onClick={() =>
            dispatch({
              type: "MOVE_TASK_DOWN",
              payload: { index },
            })
          }
        >
          ↓
        </button>

        <Button dispatch={dispatch} type="DELETE_TASK" payload={{ index }} >
          Delete
        </Button>
      </div>
    </>
  );
}

export default TaskEntry;
