import axios from "axios";

const URL = "https://take-todo.herokuapp.com/todos";

export const getTodos = () => axios.get(URL);
export const createTodo = (todo) => axios.post(URL, todo);
export const updateTodo = (id, todo) => axios.patch(`${URL}/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${URL}/${id}`);
export const checkTodo = (id) => axios.patch(`${URL}/${id}/check`);
