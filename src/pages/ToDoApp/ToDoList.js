import { MdDelete } from "react-icons/md";

export const ToDoList = ({ todoList = [], handleTaskCompletd, handleDeleteTask }) => {
  return (
    <>
      {todoList.length > 0 &&
        todoList.map((todo, index) => (
          <div className="todo-item" key={index}>
            <input
              type="checkbox"
              value={index}
              checked={todo.completed}
              onChange={handleTaskCompletd}
            />{" "}
            <span className="task-name"
            style={todo.completed ? { textDecoration: "line-through" } : {}}
            >{todo.name}</span> {" "}
            <MdDelete size={18} color="red" onClick={() => handleDeleteTask(index)}/>
          </div>
        ))}
    </>
  );
};
