import { defineStore } from 'pinia'

export const useChecklistStore = defineStore('checklist', {
  state: () => ({ items: [] }),
  getters: {
    remainingCount: (state) => state.items.filter((item) => !item.completed).length,
  },
  actions: {
    addItem(name) {
      this.items.push({
        id: Date.now(),
        name,
        completed: false,
      })
    },
    toggleItem(id) {
      const item = this.items.find((item) => item.id === id)
      if (item) item.completed = !item.completed
    },
  },
})
