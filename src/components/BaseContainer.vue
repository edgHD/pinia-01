<template>
  <section>
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
  background-image: url('../assets/logo.svg');
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
</style>