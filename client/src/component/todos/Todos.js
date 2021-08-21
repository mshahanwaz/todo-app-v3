import React from "react";
import Todo from "./todo/Todo";
import "./Todos.css";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Todos({ setCurrentId }) {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todos">
      <div className="todos__container">
        <FlipMove>
          {todos?.map((todo) => (
            <div key={todo._id} className="todos__item">
              <Todo todo={todo} setCurrentId={setCurrentId} key={todo._id} />
            </div>
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Todos;
