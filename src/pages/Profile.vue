<template>
    <div class="wrapper">
       
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
    export default{
   
    data() {
        return {};
    },
    methods: {
        // logOut() {
        //     localStorage.setItem("auth", false);
        //     window.location.href = "/entrance";
        // }
    },
}

</script>


<style src="./style/styleProfile.css" >
   







</style>