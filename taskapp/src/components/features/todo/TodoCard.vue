<script setup lang="ts">
import type { Todo } from '@/types'

const { todo } = defineProps<{ todo: Todo }>()
</script>

<template>
  <div class="todo-card">
    <div class="todo-card__header">
      <span>{{ todo.title }}</span>
    </div>
    <div class="todo-card__content">
      <span class="todo-card__status">{{
        todo.status === 'todo' ? '未着手' : todo.status === 'in_progress' ? '対応中' : '完了'
      }}</span>
      <div class="todo-card__labels">
        <span
          v-for="label in (todo.labels ?? [])"
          :key="label.id"
          class="todo-card__label"
          :style="{ backgroundColor: label.color }"
          >{{ label.name }}</span
        >
      </div>
      <span class="todo-card__start-date">開始日： {{ todo.start_date ? todo.start_date.toLocaleDateString() : "-" }}</span>
      <span class="todo-card__due-date">期限日： {{ todo.due_date ? todo.due_date.toLocaleDateString() : "-" }}</span>
      <span class="todo-card__description">詳細： {{ todo.description }}</span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.todo-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 0 16px;
}

.todo-card__header {
  font-size: 1.5rem;
}

.todo-card__content {
  padding: 8px;

  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}

.todo-card__status {
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
}

.todo-card__labels {
  span {
    border: 1px solid #ccc;
    border-radius: 24px;
    padding: 2px 16px;
    font-style: italic;
  }
}

.todo-card__start-date {
  font-style: italic;
}

.todo-card__due-date {
  font-style: italic;
}

.todo-card__description {
  flex: 1;
}
</style>
