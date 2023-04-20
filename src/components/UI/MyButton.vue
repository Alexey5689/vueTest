<template>

    <button
        class="buttn"
    >
        <slot></slot>
    </button>

</template>

<script>
    export default{
        name:'MyButton',
    }

</script>

<style scoped>
    .buttn{
        border:2px solid white;
        padding: 10px;
        align-self: flex-start;
        background: none;
    }
    .buttn:hover{
        border:2px solid red;
        border-radius: 4px;
    }

</style>