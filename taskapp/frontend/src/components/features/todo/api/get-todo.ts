import type { Todo } from "@/types";
import { api } from "../../../../composables/useAPI";

export const useGetAllTodo = async () => {
  const response = await api.get<Todo[]>("api/todo");
  return response.data;
};
