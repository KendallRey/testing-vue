<script setup lang="ts">
import { useCounterStore } from '@/store/modules/counterStore'

const store = useCounterStore()
</script>

<template>
  <div>
    <h1>Counter Page</h1>
    <p>count is {{ store.count }}</p>
    <p>Double count is {{ store.doubleCount }}</p>
    <button @click="store.increment">increment</button>
    <button @click="store.decrement">decrement</button>
  </div>
</template>
