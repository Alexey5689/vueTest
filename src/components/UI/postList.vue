<template>
    <div class="post_container">
        <PostItem
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
        />
    </div>
   
</template>


<script>
    export default{
        props:{
            posts:{
                type:Array,
                required: true,
            }
        }
    }



</script>


<style scoped>
   .post_container{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-self: center;
        
   }

</style>