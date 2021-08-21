import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import "./Todo.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { checkTodo, deleteTodo } from "../../../actions/todos";

function Todo({ todo, setCurrentId }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <div className="todo">
      <div className="todo__check">
        <label>
          <input
            type="checkbox"
            id="todo"
            value={todo.done}
            onChange={() => dispatch(checkTodo(todo._id))}
          />
          {!todo.done ? (
            <i className="bi bi-circle"></i>
          ) : (
            <i className="bi bi-check-circle-fill todo__checked"></i>
          )}
        </label>
        <div
          className="todo__text"
          onClick={() => dispatch(checkTodo(todo._id))}
        >
          <p
            style={{
              textDecoration: `${todo.done ? "line-through" : "none"}`,
              fontWeight: 500,
            }}
          >
            {todo.todo}
          </p>
          <p className="todo__created">{moment(todo.created).fromNow()}</p>
        </div>
      </div>
      <div className="todo__actions">
        <button className="todo__edit" onClick={() => setCurrentId(todo._id)}>
          <i className="bi bi-pencil-fill"></i>
        </button>
        <button className="todo__delete" onClick={handleDelete}>
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
