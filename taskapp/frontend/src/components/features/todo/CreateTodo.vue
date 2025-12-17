<script setup lang="ts">
  import type { CreateTodoType } from "@/types"
  import { ref } from "vue"

  const newTodoInitialValue = {
    title: "",
    description: null,
    labels: null,
    start_date: null,
    due_date: null,
  }

  const isOpen = ref(false)
  const newTodo = ref<CreateTodoType>(newTodoInitialValue)

  const emit = defineEmits(["add-todo"])

  const toggleFormOpen = () => {
    isOpen.value = !isOpen.value
  }

  const addTodo = () => {
    if (newTodo.value.start_date) newTodo.value.start_date = new Date(newTodo.value.start_date);
    if (newTodo.value.due_date) newTodo.value.due_date = new Date(newTodo.value.due_date);
    emit("add-todo", newTodo.value)
    newTodo.value = {
      title: "",
      description: null,
      labels: null,
      start_date: null,
      due_date: null
    }
  }

</script>

<template>
  <div class="create-todo-container">
    <div class="create-todo__button">
      <button type="button" @click="toggleFormOpen">新規Todo作成</button>
    </div>
    <div v-if="isOpen" class="create-todo__form">
      <form @submit.prevent="addTodo">
        <h1>新規Todo作成</h1>
        <div class="create-todo__form-item">
          <label for="title">タイトル</label>
          <input type="text" name="title" id="title" v-model="newTodo.title" />
        </div>
        <div class="create-todo__form-item">
          <label for="description">詳細</label>
          <textarea name="description" id="description" v-model="newTodo.description"></textarea>
        </div>
        <div class="create-todo__form-item">
          <label for="start_date">開始日</label>
          <input type="date" name="start_date" id="start_date" v-model="newTodo.start_date" />
        </div>
        <div class="create-todo__form-item">
          <label for="due_date">期限日</label>
          <input type="date" name="due_date" id="due_date" v-model="newTodo.due_date" />
        </div>
        <div class="create-todo__form-item">
          <label for="labels">ラベル</label>
          <select name="labels" id="labels" v-model="newTodo.labels">
            <option value="none"></option>
          </select>
        </div>
        <div class="form-button-container">
          <button type="submit" class="button__submit">追加する</button>
          <button type="button" class="button__cancel" @click="toggleFormOpen">キャンセルする</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="css">
  .create-todo__button > button {
    background: none;
    background-color: #3A8FB7;
    border: none;
    border-radius: 8px;
    color: #fffffb;
    font-size: 1.2rem;
    padding: 4px 16px;
  }

  .create-todo__form {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f8f9fa;
    height: 100vh;
    width: 24vw;
  }

  .create-todo__form form {
    font-size: 1.5rem;
    margin: 16px 32px;
    display: flex;
    flex-direction: column;
  }

  .create-todo__form-item {
    display: flex;
    flex-direction: column;
  }

  .create-todo__form-item:nth-child(n + 3) {
    margin-top: 32px;
  }

  .create-todo__form-item *:nth-child(2) {
    margin: 0 24px;
  }

  .create-todo__form-item input,
  .create-todo__form-item textarea {
    border: 1px solid #3e3e3e;
    border-radius: 6px;
    font-size: 1.5rem;
    padding: 8px;
  }

  .form-button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 64px;
  }

  .form-button-container button {
    background: none;
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    padding: 4px 16px;
    cursor: pointer;
  }

  .form-button-container .button__submit {
    background-color: blue;
  }

  .form-button-container .button__cancel {
    background-color: red;
  }
</style>
