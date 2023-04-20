<template>
    <div v-for="mas in mass">
      <ul>
        <li>{{mas.id }} {{ mas.text }}</li>
      </ul>
    </div>


</template>

<script>
    export default{
        props:{
            mass:{
                type: Array,
                required:true,
            }
        }
    }

</script>

<style>

</style>