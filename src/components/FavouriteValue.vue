<template>
    <h3>{{ normalizedCount }}</h3>
</template>
<script>
import { counterStore } from '../pinia/counter.js';
import { mapState } from 'pinia';

export default {
        computed: {
        ...mapState(counterStore, ['normalizedCount'])
    }
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