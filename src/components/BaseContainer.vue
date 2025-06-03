<template>
  <section>
    <nav v-if="$auth.isAuthenticated">
      <button class="logout" @click="$auth.logout">Logout</button>
    </nav>
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  background: linear-gradient(to right, rgba(164, 255, 240, 0.5) 0 100%), url('../../assets/logo.svg');
  background-repeat: repeat;
  background-origin: content-box;
  background-size: 2.5rem;
  background-color: #a4fff0;
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 600;
  -webkit-text-stroke: 1px black;
}

nav {
  display: flex;
  justify-content: right;
}
.logout {
  background-color: #9c0a00;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>