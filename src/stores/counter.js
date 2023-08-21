import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 10,
    title: 'My Counter Title'
  }),
  actions: {
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCuunter(amount) {
      this.count -= amount;
    }
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return 'even'
      return 'odd'
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}