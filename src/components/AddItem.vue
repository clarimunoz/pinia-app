<script setup>
import { ref } from 'vue'
import { useChecklistStore } from '@/stores/checklist'

const store = useChecklistStore()

const item = ref('')

function onSubmit() {
  if (!item.value.trim()) return
  store.addItem(item.value)
  item.value = ''
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex flex-col gap-4 max-w-sm">
    <label class="text-2xl font-semibold text-red-950">Add item to list:</label>
    <input
      v-model="item"
      placeholder="Make bed"
      class="w-full rounded-xl border-0 bg-white px-4 py-2 text-red-950 placeholder:text-red-950/50"
    />
    <button
      type="submit"
      class="self-end rounded-full bg-red-950 px-5 py-2 font-semibold text-white cursor-pointer transition-transform active:translate-y-0.5"
    >
      Add to list
    </button>
  </form>
</template>
