import {
  FETCH_ALL,
  UPDATE,
  CREATE,
  DELETE,
  CHECK,
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...todos, action.payload];
    case UPDATE:
    case CHECK:
      return todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
    case DELETE:
      return todos.filter((todo) => todo._id !== action.payload);
    default:
      return todos;
  }
};
