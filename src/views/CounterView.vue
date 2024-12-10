<script setup lang="ts">
import { useCounterStore } from '@/store/modules/counterStore'

const store = useCounterStore()
</script>

<template>
  <div>
    <h1 class="text-h3">Counter Page</h1>
    <p class="text-subtitle-1">count is {{ store.count }}</p>
    <p class="text-subtitle-1">Double count is {{ store.doubleCount }}</p>
    <div class="flex items-center gap-2">
      <v-btn @click="store.increment" color="primary">increment</v-btn>
      <v-btn @click="store.decrement" color="primary">decrement</v-btn>
    </div>
  </div>
</template>
