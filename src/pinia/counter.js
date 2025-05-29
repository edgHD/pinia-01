import { defineStore } from "pinia";

export const counterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  actions: {
    increment(num = 1) {
      console.log("increment is called with num:", num);
      this.count = this.count + num;
    },
    decrement(num = 1) {
      console.log("decrement is called with num:", num);
      this.count = this.count - num;
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    normalizedCount(getters) {
      const doubleCount = getters.doubleCount;
      if (doubleCount < 0) {
        return 0;
      }
      if (doubleCount > 100) {
        return 100;
      }
      return doubleCount;
    }
  },
});
