import React, { useEffect, useState } from "react";
import Form from "../form/Form";
import Todos from "../todos/Todos";
import "./Home.css";
import { useDispatch } from "react-redux";
import { getTodos } from "../../actions/todos";

function Home() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__form">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className="home__todos">
          <Todos setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default Home;
