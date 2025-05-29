import { defineStore } from "pinia";

export const counterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  actions: {
    increment(num = 1) {
      console.log("increment is called with num:", num);
      this.count = this.count + num;
    },
  },
});
