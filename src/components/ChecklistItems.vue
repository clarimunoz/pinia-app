<script setup>
import { useChecklistStore } from '@/stores/checklist'

const store = useChecklistStore()
</script>

<template>
  <ul class="list-none space-y-6 p-0">
    <li
      v-for="item in store.items"
      :key="item.id"
      class="flex items-center gap-3 font-semibold text-red-950"
    >
      <input
        type="checkbox"
        :checked="item.completed"
        @change="store.toggleItem(item.id)"
        class="size-4 accent-red-950"
      />
      <label>{{ item.name }}</label>
    </li>
  </ul>
</template>
