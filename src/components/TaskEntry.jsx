import React from "react";
import Button from "./Button";
import Button2 from "./Button2";
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
       
        <Button2 dispatch={dispatch} type='MOVE_TASK_UP' payload={{index}} >  ↑ </Button2>
        {/* <button className="move-up-button"
          onClick={() =>
            dispatch({
              type: "MOVE_TASK_UP",
              payload: { index },
            })
          }
        >
          ↑
        </button> */}
         <Button2 dispatch={dispatch} type='MOVE_TASK_DOWN' payload={{index}} > ↓  </Button2>

        {/* <button className="move-up-button"
          onClick={() =>
            dispatch({
              type: "MOVE_TASK_DOWN",
              payload: { index },
            })
          }
        >
          ↓
        </button> */}

<Button dispatch={dispatch} type="DELETE_TASK" payload={{ index }} disabled={!task.completed} className={'custom-button delete-button'} >
          Delete
        </Button>

<button
        className="custom-button"
        onClick={() => {
          const newTask = window.prompt(
            "Enter the new task title:",
            task.title
          );
          if (newTask !== null && newTask.trim() !== "") {
            dispatch({
              type: "EDIT_TASK",
              payload: { index, newTask },
            });
          }
        }}
      >
        Edit
      </button>


      </div>
    </>
  );
}

export default TaskEntry;
