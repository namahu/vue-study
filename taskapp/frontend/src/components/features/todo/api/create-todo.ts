import { api } from "@/composables/useAPI";
import type { TodoCreateInput, TodoApiResponse } from "@/types";

export const useCreateTodo = async (newTodo: TodoCreateInput) => {
  try {
    const response = await api.post<TodoApiResponse>("api/todo", newTodo);
    return response.data;
  } catch (error) {
    console.error("Todoの作成に失敗しました。", error);
    throw error;
  }
}
