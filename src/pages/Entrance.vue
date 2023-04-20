<template>

   <div>{{ $store.state.auth }}</div>
    
    <div  class="entr_wrap" v-if="!$store.state.auth" >
        <h1 class="colorH1">Вход</h1>
        <div class="enter">
                <div class="wrong" v-if="state.gard">
                    Не верный email или пароль.
                </div>
            <form @submit.prevent="handlerSubmit" class="validate">
                <MyInput 
                    v-bind:title="state.message"
                    v-model.trim="state.email"
                    type="email" 
                    placeholder="Почта"/>
                <small class="ruls" v-for="errors in v$.email.$errors">{{ errors.$message }}</small>    
                <MyInput 
                    v-model.trim="state.passw"
                    type="password"
                    placeholder="Пароль"/>
                <small class="ruls" v-for="errors in v$.passw.$errors">{{ errors.$message }}</small>   
                <MyButton class="entr_form_btn" type="submit">Отправить</MyButton>
            </form>
        </div>
    </div>
    <div v-else class="entr_wrap" >
        <div class="enter">
            <h1  class="success" >ВЫ уже авторизовались!</h1>
            <!-- <MyButton @click="logOut" class="entr_form_btn btn_logout" >Logout</MyButton> -->
        </div>
    </div>
</template>

<script>
    import { validate } from '../hooks/EntranceValid';
    export default{
        setup(props){
            const {state, v$} = validate();
            return{
                state, 
                v$, 
            };
        },
        data(){
            return{
                
            }
        },
        methods:{
            handlerSubmit(){
                this.v$.$validate()
                if(this.v$.$error){
                   return;
                }else{
                    FormData={
                        email: this.state.email,
                        password: this.state.passw,
                    }
                    // this.state.email = '';
                    // this.state.passw = '';
                    localStorage.setItem('auth', true);
                    window.location.href ='/profile';     
                }    
            },
           
            logOut(){
                localStorage.setItem('auth', false);    
            },   
        },
       
      
    }
</script>

<style src="./style/styleEntrance.css" scoped>
   

</style>


