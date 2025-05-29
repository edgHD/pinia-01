<template>
    <button @click="counter.increment()">Add 1</button>
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