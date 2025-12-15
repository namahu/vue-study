<script setup lang="ts">
import { ref } from 'vue'
import TodoCard from '@/components/features/todo/TodoCard.vue'
import type { Todo } from '@/types'

const todos = ref<Todo[]>([
  {
    id: 1,
    title: 'Todo 1',
    description: 'Todo 1 の説明',
    status: 'todo',
    labels: [
      {
        id: 1,
        name: 'Label 1',
        color: '#ff0000',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    start_date: new Date(),
    due_date: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    completed_at: null,
  },
  {
    id: 2,
    title: 'Todo 2',
    description: 'Todo 2 の説明',
    status: 'todo',
    labels: [
      {
        id: 2,
        name: 'Label 2',
        color: '#00ff00',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    start_date: new Date(),
    due_date: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
    completed_at: null,
  },
])
</script>

<template>
  <div class="todo-list">
    <h1>Todo 一覧</h1>
    <div class="todo-list__container">
      <TodoCard v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  margin: 16px 16px 0;
}

.todo-list__container {
  :not(:first-child) {
    margin-top: 16px;
  }
}
</style>
