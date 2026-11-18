<script setup>
import AddItem from './components/AddItem.vue'
import ChecklistItems from './components/ChecklistItems.vue'
import ChecklistSummary from './components/ChecklistSummary.vue'
</script>

<template>
  <main
    class="min-h-screen p-8 grid place-items-center bg-linear-to-br from-red-200 via-orange-200 to-red-200"
  >
    <div class="mx-auto grid -translate-y-24 items-center w-full max-w-6xl gap-10 md:grid-cols-2">
      <section>
        <AddItem />
      </section>
      <section class="rounded-3xl bg-white/80 p-15 flex min-h-100 flex-col">
        <h1 class="text-2xl font-bold mb-8 text-red-950">To Do:</h1>
        <ChecklistItems />
        <ChecklistSummary />
      </section>
    </div>
  </main>
</template>
