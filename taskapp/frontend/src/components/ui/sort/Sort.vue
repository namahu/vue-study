<script setup lang="ts">
  import { ref } from "vue"

  const isOpen = ref(false)
  const toggleFormOpen = () => {
    isOpen.value = !isOpen.value
  }

</script>

<template>
  <div class="sort-container">
    <button type="button" @click="toggleFormOpen">sort</button>
    <div v-if="isOpen" class="sort__content">
      <div class="sort__target">
        <label for="sort-target">■ ソートする項目</label>
        <select id="sort-target">
          <option>-- 選択してください --</option>
          <option value="id">ID</option>
          <option value="created_at">作成日</option>
        </select>
      </div>
      <div class="sort__sort-order sort-order-asc">
        <input type="radio" name="sort-rule" id="sort-asc">
        <label for="sort-asc">昇順</label>
      </div>
      <div class="sort__sort-order sort-order-desc">
        <input type="radio" name="sort-rule" id="sort-desc">
        <label for="sort-desc">降順</label>
      </div>
      <button type="button" class="sort__submit-button">並び替える</button>
    </div>

  </div>
</template>

<style scoped lang="css">
  .sort-container {
    font-size: 1.2rem;
    position: relative;
  }

  .sort-container > button {
    font-size: 1.2rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  .sort__content {
    display: grid;
    gap: 16px;
    grid-template-areas:
      "sort-target        sort-target"
      "sort-order-asc     sort-order-desc"
      ".                  sort-submit-button";

    width: fit-content;
    background-color: #f8f9fa;
    border-radius: 6px;
    padding: 16px;
    position: absolute;
  }


  .sort-order-asc {
    grid-area: sort-order-asc;
  }

  .sort-order-desc {
    grid-area: sort-order-desc;
  }

  
  .sort__target {
    grid-area: sort-target;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  .sort__target select {
    font-size: 1.2rem;
    padding: 4px 16px;
  }

  .sort__sort-order input[type=radio] {
    display: none;
  }

  .sort__sort-order label {
    background-color: #fffffb;
    border: 1px solid #3e3e3e;
    border-radius: 16px;
    cursor: pointer;
    padding: 2px 16px;
  }

  .sort__sort-order input[type=radio]:checked + label {
    background-color: aqua;
  }

  .sort__submit-button {
    grid-area: sort-submit-button;
    font-size: 1.2rem;

    width: fit-content;
    padding: 4px 16px;
    border-radius: 8px;
    border: none;
    background-color: darkorange;
    cursor: pointer;
  }
</style>
