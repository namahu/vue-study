<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import TodoCard from '@/components/features/todo/TodoCard.vue'
import type { Todo } from '@/types'
import { useGetAllTodo } from '@/components/features/todo/api/get-todo'

const todos = ref<Todo[]>()

watchEffect( async () => {
  todos.value = await useGetAllTodo()
})
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
