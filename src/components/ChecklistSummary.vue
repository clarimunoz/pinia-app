<script setup>
import { useChecklistStore } from '@/stores/checklist'

const store = useChecklistStore()
</script>

<template>
  <p class="mt-auto pt-10 self-center text-lg font-bold text-red-950">
    <label>Left to complete: {{ store.remainingCount }}</label>
  </p>
</template>
