import { api } from "@/composables/useAPI";
import type { CreateTodoType, Todo } from "@/types";

export const useCreateTodo = async (newTodo: CreateTodoType) => {
  try {
    const response = await api.post<Todo>("api/todo", newTodo);
    return response.data;
  } catch (error) {
    console.error("Todoの作成に失敗しました。", error);
    throw error;
  }
}
