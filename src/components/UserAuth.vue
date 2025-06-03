<template>
    <nav>
        <button class="login" @click="$auth.login">Login</button>
    </nav>
</template>

<script></script>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
.login {
    background-color: #008616;
    border: 3px solid #5cff77;
    border-radius: 5px;
    color: white;
    padding: 5px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>