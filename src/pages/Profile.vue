<template>
    <div class="wrapper">
            <ModelWindow v-model:show="$store.state.show">
                <createPost
                    @create="createPost"
                />
            </ModelWindow>
                <div class="left_hand">
                    <div class="left_hand_img">
                        <div class="left_hand_img_user">
                            <img src="../assets/bx-angry_red.svg" alt="">
                        </div>
                        <div class="left_hand_img_info">
                            <p>UserName</p>
                            <p>UserLastName</p>
                        </div>
                    </div>
                    <div class="left_hand_menu">
                        <SideMenu class="side"/>
                    </div>  
                </div>
                <div class="right_hand">
                    <router-view></router-view>
                </div>
    </div>
</template>
 <!-- <MyButton @click="logOut()">Выход</MyButton> -->

<script>
    import { mapState} from 'vuex'
    export default{
   
    data() {
        return {};
    },
    computed:{
        ...mapState({
            posts: state => state.post.posts, 
        })
    },
    methods: {
        // logOut() {
        //     localStorage.setItem("auth", false);
        //     window.location.href = "/entrance";
        // }
        createPost(post){
            this.posts.push(post);
        }
            
           
        
        
    },
}

</script>


<style src="./style/styleProfile.css" >
   







</style>