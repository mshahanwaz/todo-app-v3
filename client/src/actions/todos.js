import {
  FETCH_ALL,
  UPDATE,
  CREATE,
  DELETE,
  CHECK,
} from "../constants/actionTypes";
import * as api from "../api/todos";

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.getTodos();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todo);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTodo = (id, todo) => async (dispatch) => {
  try {
    const { data } = await api.updateTodo(id, todo);
    console.log("ooo >> ", data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const checkTodo = (id) => async (dispatch) => {
  try {
    const { data } = await api.checkTodo(id);
    dispatch({ type: CHECK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
