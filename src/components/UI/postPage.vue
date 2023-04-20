<template>
    <div class="container">
       
        <!-- <createPost
            @create="createPost"
        /> -->
       <MyButton @click="$store.state.show = true">Создать пост</MyButton>
       <div class="postList">
            <PostList
                :posts="posts"
                v-if="!isPostLoading"
                @remove="removePost"
                
            />
            <div v-else>Идет загрузка...</div>
            <div class="page_wrapper">
                <div class="page" 
                    :key="pageNumber"
                    :class="{
                        'current_page': page === pageNumber
                    }"
                    @click="changePage(pageNumber)"
                    v-for="pageNumber in totalPages">
                        {{ pageNumber }}
                </div>
            </div>
       </div>
    </div>
</template>

<script>

    import {mapActions, mapMutations, mapState} from 'vuex'
    // import axios from 'axios';
    import PostList from './postList.vue';
    export default{
        components:{
            PostList,
        },
    data() {
        return {
            // limit:10,
            // page:1,
            // totalPages:0,
            // isPostLoading:false,
            // posts: [
              
            // ]
        };
    },
    computed:{
            ...mapState({
                limit: state => state.post.state,
                page: state => state.post.page,
                totalPages: state => state.post.totalPages,
                isPostLoading: state => state.post.isPostLoading,
                posts: state => state.post.posts,  
            }),   
        },
    methods: {
        creat(){
            $store.state.show = true;
        },
        createPost(post) {
            this.posts.push(post);
        },
        ...mapMutations({
            getPage: 'getPage',
            getPost: 'getPost',
        }),

        ...mapActions({
            fetchPost: 'fetchPost',
        }),
           
        changePage(pageNumber){ 
            this.getPage(pageNumber);
            this.fetchPost(); 
        },
        removePost(post){
            this.getPost(this.posts.filter(p =>p.id!== post.id));   
        } 
    },
    mounted(){
        this.fetchPost();
    },

}

</script>

<style src="../UIStyle/postPageStyle.css">
   
</style>