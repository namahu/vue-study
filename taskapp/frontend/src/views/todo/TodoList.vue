<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TodoCard from '@/components/features/todo/TodoCard.vue'
import type { TodoCreateInput, TodoApiResponse } from '@/types'
import { useGetAllTodo } from '@/components/features/todo/api/get-todo'
import Sort from '@/components/ui/sort/Sort.vue'
import Filter from '@/components/ui/filter/Filter.vue'
import CreateTodo from '@/components/features/todo/CreateTodo.vue'
import { useCreateTodo } from '@/components/features/todo/api/create-todo'

const todos = ref<TodoApiResponse[]>([])
const errorMessage = ref<string>('')

const addTodo = async (newTodo: TodoCreateInput) => {
  try {
    errorMessage.value = '' // エラーメッセージをクリア
    const response = await useCreateTodo(newTodo)
    todos.value.push(response)
  } catch (error) {
    console.error('Todo作成に失敗しました:', error)
    // ユーザー向けのフレンドリーなエラーメッセージを表示
    const errorMsg = error instanceof Error ? error.message : 'Todoの作成中に予期しないエラーが発生しました'
    errorMessage.value = `Todo作成に失敗しました: ${errorMsg}`
    return // エラー後の適切な終了
  }
}

onMounted( async () => {
  todos.value = await useGetAllTodo()
})
</script>

<template>
  <div class="todo-list">
    <!-- エラーメッセージの表示 -->
    <div v-if="errorMessage" class="error-notification">
      <div class="error-content">
        <span class="error-icon">⚠️</span>
        <span class="error-text">{{ errorMessage }}</span>
        <button @click="errorMessage = ''" class="error-close" aria-label="エラーメッセージを閉じる">
          ✕
        </button>
      </div>
    </div>
    
    <div class="todo-list__header">
      <div class="todo-list__header-title">
        <h1>Todo 一覧</h1>
      </div>
      <div class="todo-list__header-menu">
        <Sort />
        <Filter />
        <CreateTodo @add-todo="addTodo" />
      </div>
    </div>
    <div class="todo-list__container">
      <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  margin: 16px 16px 0;
}

/* エラー通知のスタイル */
.error-notification {
  background-color: #fee;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin-bottom: 16px;
  animation: slideDown 0.3s ease-out;
}

.error-content {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
}

.error-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.error-text {
  color: #721c24;
  flex-grow: 1;
  font-size: 0.95rem;
  line-height: 1.4;
}

.error-close {
  background: none;
  border: none;
  color: #721c24;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 4px;
  border-radius: 4px;
  flex-shrink: 0;
  transition: background-color 0.2s;
}

.error-close:hover {
  background-color: #f1b0b7;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.todo-list__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid #e3e3e3;
}

.todo-list__header-title {
  width: fit-content;
}

.todo-list__header-menu {
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin: 0 32px;
}

.todo-list__container {
  :not(:first-child) {
    margin-top: 16px;
  }
}
</style>
