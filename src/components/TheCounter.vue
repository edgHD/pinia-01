<template>
    <h3>{{ counter.count }}</h3>
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