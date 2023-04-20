<template>
    <input 
        :value="modelValue"
        @input="updateInput"
        class="input"
    >
</template>


<script>
    export default{
        name:'MyInput',
        props:{
            modelValue:[
                String,
                Number,
            ]  
        },
        methods:{
            updateInput(e){
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }




</script>


<style scoped>
    .input{
        margin-top: 20px;
        padding: 10px;
        height: 30px;
        max-width: 100%;
        outline: none;  
    }
    .input:hover, .input:focus{
        border:2px solid red;
        border-radius: 4px;
    }



</style>