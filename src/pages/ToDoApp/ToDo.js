import { useState } from "react";
import { ToDoAddEdit } from "./ToDoAddEdit";
import { ToDoList } from "./ToDoList";

export const ToDo = () => {
  const [taskList, setTaskLists] = useState([]);

  const handleAddTask = (value) => {
    let initialTaskObj = {
      name: value,
      completed: false,
    };
    setTaskLists((prevList) => [initialTaskObj, ...prevList]);
  };

  const handleTaskCompletd = (e) => {
    let { value: id, checked } = e.target;
    let taskListCopy = [...taskList];
    taskListCopy[id].completed = checked;
    setTaskLists(taskListCopy);
  };

  const handleDeleteTask = (id) => {
    let taskListCopy = [...taskList];
    taskListCopy.splice(id, 1)
    setTaskLists(taskListCopy)
  }

  return (
    <div className="todo-app">
      <h2>ToDo App</h2>
      <ToDoAddEdit handleAddTask={handleAddTask} />
      <hr />
      <ToDoList 
      todoList={taskList} 
      handleTaskCompletd={handleTaskCompletd} 
      handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};
