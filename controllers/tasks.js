// importar modelo
import { TaskModel } from "../models/task.js";
import { validateSchema } from "../schemas/task.js";

export const getAllTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks();
  res.json(tasks);
};

export const addTask = (req, res) => {
  const newTask = req.body;
  let validatedTask = null;
  try {
    validatedTask = validateSchema(newTask);
  } catch (err) {
    // Si la description no es un string dara un error
    // Le añadimos un valor por defecto
    validatedTask = {
      description: "New Task",
    };
  }

  const task = TaskModel.addTask(validatedTask);
  res.json(task);
};

export const deleteTask = (req, res) => {
  // /tasks/:id <-- params de req
  const { id } = req.params;
  TaskModel.deleteTask(id);
  res.json({ message: "Deleted successfully" });
};
