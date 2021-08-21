import mongoose from "mongoose";
import TodoSchema from "../models/todoDB.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await TodoSchema.find();
    res.status(200).send(todos);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  const todo = req.body;
  const newTodo = new TodoSchema(todo);
  try {
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const todo = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ message: "No todo with that id" });

  try {
    const updatedTodo = await TodoSchema.findByIdAndUpdate(id, todo, {
      new: true,
    });
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ message: "No todo with that id" });

  await TodoSchema.findByIdAndRemove(id);
  res.status(200).send({ message: "Post deleted successfully!" });
};

export const checkTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ message: "No todo with that id" });

  const todo = await TodoSchema.findById(id);
  const updatedTodo = await TodoSchema.findByIdAndUpdate(
    id,
    {
      done: !todo.done,
    },
    { new: true }
  );
  res.status(200).send(updatedTodo);
};
