<template>
    <div class="navPanel">
        <div class="navPanel__lable">
            <h1 @click="$router.push('/')">VUE</h1>
        </div>
        <div class="navPanel__btns">
            <MyButton class="reg_btn" @click="$router.push('/registration')">Регистрация</MyButton>
            <MyButton v-if="!$store.state.auth" class="reg_btn" @click="$router.push('/entrance')">Вход</MyButton>
            <MyButton v-else class="reg_btn" @click="logOut()">Выход</MyButton> 
        </div>
    </div>
</template>


<script>
    export default{
        name:'NavBar',
        methods:{
                logOut(){
                    localStorage.setItem('auth', false);  
                    window.location.href='/';
                },
        }
    }

</script>


<style scoped>
    .navPanel{
        background: black;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;   
    }
    .navPanel__lable{
        max-width: 20%;
        color:rgb(255, 0, 0);
        padding: 15px 0px 15px 20px ;
        align-items: center;
        display: flex;
        align-items: center;
    }
    .navPanel__lable>h1{
        margin: 0;
        font-family: sans-serif;
        cursor: pointer;
    }
    .navPanel__btns{
        width: 200px;
        display: flex;
        justify-content: space-between;
        padding: 15px 20px 15px 0px ;
    }
    .reg_btn{
        color:white;
    }
</style>