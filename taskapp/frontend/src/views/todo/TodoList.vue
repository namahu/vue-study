<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TodoCard from '@/components/features/todo/TodoCard.vue'
import type { Todo } from '@/types'
import { useGetAllTodo } from '@/components/features/todo/api/get-todo'
import Sort from '@/components/ui/sort/Sort.vue'
import Filter from '@/components/ui/filter/Filter.vue'
import CreateTodo from '@/components/features/todo/CreateTodo.vue'

const todos = ref<Todo[]>([])

onMounted( async () => {
  todos.value = await useGetAllTodo()
})
</script>

<template>
  <div class="todo-list">
    <div class="todo-list__header">
      <div class="todo-list__header-title">
        <h1>Todo 一覧</h1>
      </div>
      <div class="todo-list__header-menu">
        <Sort />
        <Filter />
        <CreateTodo />
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
