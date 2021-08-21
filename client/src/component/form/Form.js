import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, updateTodo } from "../../actions/todos";
import "./Form.css";

function Form({ currentId, setCurrentId }) {
  const [todo, setTodo] = useState({
    todo: "",
    created: Date.now(),
  });
  const dispatch = useDispatch();
  const todoFound = useSelector((state) =>
    currentId ? state.todos.find((todo) => todo._id === currentId) : null
  );

  useEffect(() => {
    if (currentId) setTodo(todoFound);
  }, [currentId, todoFound]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateTodo(currentId, todo));
    } else {
      if (todo.todo) dispatch(createTodo(todo));
    }
    setCurrentId(null);
    setTodo({ todo: "", created: Date.now() });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>{currentId ? "Edit" : "Write"} a todo</h2>
        <input
          type="text"
          placeholder="Any todo?"
          value={todo.todo}
          onChange={(e) => setTodo({ ...todo, todo: e.target.value })}
          autoFocus
        />
        <div className="form__actions">
          <button type="submit" className="form__submit">
            Add
          </button>
          <button className="form__clear">Clear</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
