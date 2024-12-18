import React from "react";
import { useState, useReducer } from "react";
import { Link } from "react-router";
import TextInput from "../components/TextInput";
import AddButton from "../components/AddButton";
import { toDoListReducer } from "../reducer/toDoListReducer";

const initialState = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true,
  },
  {
    userId: 1,
    id: 13,
    title: "et doloremque nulla",
    completed: false,
  },
  {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true,
  },
  {
    userId: 1,
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true,
  },
  {
    userId: 1,
    id: 16,
    title: "accusamus eos facilis sint et aut voluptatem",
    completed: true,
  },
  {
    userId: 1,
    id: 17,
    title: "quo laboriosam deleniti aut qui",
    completed: true,
  },
  {
    userId: 1,
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true,
  },
];

function ToDoList() {
  const [task, setTask] = useState("");
  const [todoList, dispatch] = useReducer(toDoListReducer, initialState);

    const taskList =todoList.map((task) => {
        return(
            <div key={task.id}>
                <p>{task.title}</p>
            </div>

        )
    })

  // function HandleInputChange(){
  // }

  // function addTask(){}

  // function deleteTask(){}

  // function editTask(){}

  // function toggleTask(){}

  // function moveTaskUp(){}

  // function moveTaskDown(){}

  return (
    <div>
      <Link to="/">Home</Link> <br />
      <div className="task-div">
        <h1>ToDoList</h1>
        Create a new Task: <br />
        <TextInput state={task} setState={setTask} />{" "}
        <AddButton type="ADD_TASK" payload={{ task }} dispatch={dispatch}>
          Add Task
        </AddButton>{" "}
        <br /> <br />
      </div>
      <div>{taskList}</div>
    </div>
  );
}

export default ToDoList;
