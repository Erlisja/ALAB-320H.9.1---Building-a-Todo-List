import React from "react";
import { useState, useReducer } from "react";
import { Link } from "react-router";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import toDoListReducer from "../reducer/toDoListReducer";
import TaskEntry from "../components/TaskEntry";

const initialState = [
  {
    userId: 1,
    id: 1,
    title: "Go to the store",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Pick up the kids",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "Do the laundry",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "Clean the house",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "Walk the dog",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "Take out the trash",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "Mow the lawn",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "Wash the car",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "Get the oil changed",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "Go to the gym",
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: "Read a book",
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: "Write some code",
    completed: true,
  },
  {
    userId: 1,
    id: 13,
    title: "Take a nap",
    completed: false,
  },
  {
    userId: 1,
    id: 14,
    title: "Go to the beach",
    completed: true,
  },
  {
    userId: 1,
    id: 15,
    title: "Watch a movie",
    completed: true,
  },
  {
    userId: 1,
    id: 16,
    title: "Play some video games",
    completed: true,
  },
  {
    userId: 1,
    id: 17,
    title: "Go for a run",
    completed: true,
  },
  {
    userId: 1,
    id: 18,
    title: "Go for a walk",
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: "Go for a bike ride",
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: "Send an email",
    completed: true,
  },
];

function ToDoList() {
  const [newTask, setNewTask] = useState("");
  const [state, dispatch] = useReducer(toDoListReducer, initialState);

  const taskList = state.map((task, index) => (
    <TaskEntry key={index} task={task} index={index} dispatch={dispatch} />
  ));

  return (
    <div>
      <Link to="/">Home</Link> <br />
      <div className="task-div">
        <h1>To Do List</h1>
        <h2>Create a new Task:</h2>
        <div >
        <TextInput state={newTask} setState={setNewTask} />{" "}
        <Button  type="ADD_TASK" payload={{ newTask }} dispatch={dispatch}>
          Add Task
        </Button>{" "}
        </div>
        <br /> <br />
      </div>
      <div>{taskList}</div>
    </div>
  );
}

export default ToDoList;
