import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import "../CSS/TodoItems.css";

const TodoItems = (props) => {
  const { todo, doneTodo, deleteTodo, input } = props;
  return (
    <div className={todo.done ? "todo-row done" : "todo-row"}>
      {todo.text}
      <div className="icon-container">
        <MdOutlineDownloadDone
          style={{ marginRight: 8 }}
          onClick={() => doneTodo(todo.id)}
        />
        <AiFillDelete onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItems;
