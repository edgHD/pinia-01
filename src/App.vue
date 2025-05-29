<template>
  <base-container title="Pinia"></base-container>
  <TheCounter />
  <button @click="counter.increment(11)">Add 11</button>
  <ChangeCounter />
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import { counterStore } from './pinia/counter.js';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  setup() {
    const counter = counterStore();
    return { counter };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>