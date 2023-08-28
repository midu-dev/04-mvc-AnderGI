import { z } from "zod";

const taskSchema = z.object({
  // En caso de que no sea valida la descripcción se le asigna una por defecto
  description: z.string().default("New Task"),
});

export function validateSchema(input) {
  return taskSchema.parse(input);
}
