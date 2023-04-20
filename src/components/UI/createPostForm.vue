<template>

    <form 
        class="postForm"
        @submit.prevent="createPost">
        <MyInput
            v-model="post.title"
        />
        <MyInput
            v-model="post.body"
        />
        <MyButton  class="btnPost" type="submit">Post</MyButton>
    </form>

</template>


<script>
   
    export default{
        name:'CreatePost',
        data(){
            return{

                post:{
                    id: 0,
                    title: '',
                    body:''
                },
                id:100,
            }
        },
        methods:{
            createPost() {
                this.post.id = ++this.id;
                this.$emit('create', this.post),
                this.post={
                    title: '',
                    body:''
                } 
            }
        }
    }

</script>

<style scoped>
    .postForm{
        width: 100%;
        display: flex;
        flex-direction: column; 
    }
    .btnPost{
        align-self: flex-end;
        margin-top: 10px;
        padding:  15px 20px;
        border: 2px solid black; 
    }
</style>