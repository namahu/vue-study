<script setup lang="ts">

</script>

<template>
  <div class="filter-container">
    <span>filter: </span>
    <div class="filter__contents">
      <ul>
        <li class="filter__item">全て</li>
        <li class="filter__item">未着手</li>
        <li class="filter__item">対応中</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="css">
  .filter-container {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .filter-container > span {
    font-size: 1.2rem;
  }

  .filter__contents ul {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  .filter__item {
    background-color: #e3e3e3;
    border-radius: 16px;
    padding: 2px 16px;
    cursor: pointer;
  }
</style>
