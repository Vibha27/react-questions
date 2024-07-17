import { useState } from "react";
import { MdAddBox } from "react-icons/md";

export const ToDoAddEdit = ({ handleAddTask }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (task) {
      handleAddTask(task);
      setTask("");
    } else {
      window.alert("Please enter your task!");
    }
  };

  return (
    <form onSubmit={handleTaskSubmit}>
        <div className="todo-form">
        <input
        type="text"
        placeholder="What's up next ?"
        value={task}
        onChange={handleInputChange}
      />
      <button type="submit"><MdAddBox color="blue" size={40} /></button>
        </div>
    </form>
  );
};
