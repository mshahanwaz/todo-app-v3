import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import todoRoutes from "./routes/todos.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello to TODO API");
});

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.DB_CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
