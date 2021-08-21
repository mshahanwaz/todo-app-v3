import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todo: String,
  created: Date,
  done: {
    type: Boolean,
    default: false,
  },
});

const TodoSchema = mongoose.model("todos", todoSchema);

export default TodoSchema;
