<template>
    <div class="container">
        <button class="increment" @click="increment()">Add 1</button>
        <button class="decrement" @click="decrement()">Subtract 1</button>

    </div>
</template>

<script>
import { counterStore } from '../pinia/counter.js';
import { mapActions } from 'pinia';

export default {
    methods: {
        ...mapActions(counterStore, ['increment', 'decrement'])
    }
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.increment {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.decrement {
    background-color: #f44336;
    /* Red */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

.increment:hover,
.decrement:hover {
    opacity: 0.8;
}
</style>