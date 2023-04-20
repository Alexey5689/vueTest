<template>
        <div class="post">
            <div class="post_left">
                <div>
                    id: {{ post.id }}
                </div> 
                <div>
                    title: {{ post.title }}
                </div> 
                <div>
                    body: {{ post.body }}
                </div>
            </div>
            <div class="post_right">
                <MyButton @click="$emit('remove', post)">Delete</MyButton>
            </div>
        </div>
</template>


<script>


    export default{
    name: "PostItem",
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    
}

</script>

<style scoped>
    .post{
        border: 2px solid red;
        padding: 15px;
        display: flex;
        flex-direction: row;
        font-family: sans-serif;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .post_left{
        width: 70%;
    }
    .post_right{
        width: 30%;
        display: flex;
        justify-content: end;
        align-self: center;
        
    }

</style>