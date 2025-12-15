<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="header"></div>
  <RouterView />
</template>

<style scoped>
.header {
  height: 64px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}
</style>
