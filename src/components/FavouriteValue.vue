<template>
    <h3>{{ counter.normalizedCount }}</h3>
</template>
<script>
import { counterStore } from '../pinia/counter.js';

export default {
    setup() {
        const counter = counterStore();
        return { counter };
    },
};
</script>

<style scoped>
h3 {
    text-align: center;
    font-size: 2em;
    font-weight: 900;
    color: yellow;
    -webkit-text-stroke: 2px black;
}
</style>