import type { TodoApiResponse } from "@/types";
import { api } from "../../../../composables/useAPI";

export const useGetAllTodo = async () => {
  const response = await api.get<TodoApiResponse[]>("api/todo");
  return response.data;
};
