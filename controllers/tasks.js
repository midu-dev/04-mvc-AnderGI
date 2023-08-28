// importar modelo
import { TaskModel } from "../models/task.js";

export const getAllTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks();
  res.json(tasks);
};

export const addTask = (req, res) => {
  const newTask = req.body;
  const task = TaskModel.addTask(newTask);
  res.json(task);
};

export const deleteTask = (req, res) => {
  // /tasks/:id <-- params de req
  const { id } = req.params;
  TaskModel.deleteTask(id);
  res.json({ message: "Deleted successfully" });
};
