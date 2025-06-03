<template>
  <div class="app-container">
    <div class="main-content">
      <base-container v-if="$auth.isAuthenticated" title="Pinia">
        <TheCounter />
        <FavouriteValue />
        <button class="add-11" @click="counter.increment(11)">Add 11</button>
        <button class="rm-11" @click="counter.decrement(11)">Subtract 11</button>
        <ChangeCounter />
      </base-container>
      <base-container v-else title="Authentication">
        <UserAuth />
      </base-container>
    </div>
    <p class="isAuth">Is Authenticated? {{ $auth.isAuthenticated }}</p>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { counterStore } from './pinia/counter.js';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  setup() {
    const counter = counterStore();
    return { counter };
  }
}
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

.add-11,
.rm-11 {
  background-color: #002499;
  /* Green */
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.add-11:hover,
.rm-11:hover {
  opacity: 0.8;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.isAuth {
  text-align: center;
  color: #333;
  padding: 1rem;
  margin: 0;
  background-color: #f5f5f5;
}
</style>