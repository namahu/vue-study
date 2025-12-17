import { api } from "@/composables/useAPI";
import type { CreateTodoType } from "@/types";

export const useCreateTodo = async (newTodo: CreateTodoType) => {
  const response = await api.post("api/todo", newTodo);
  console.log(response);
}
