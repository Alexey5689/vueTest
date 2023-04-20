<template>

   
    <div v-if="state.isReg" class="reg_wrap">
        <h1 class="colorH1">Вы успешно зарегистрировались!</h1>
        <p class="reference" @click="$router.push('/entrance')">Войдите в свой аккаунт.</p>
    </div>
    <div v-else class="reg_wrap">
        <h1 class="colorH1">Регистрация</h1>
        <div class="reg">
            <form @submit.prevent="handlerSubmit" class="validate">
                <MyInput
                    v-model.trim="state.firstName"
                    type="text"
                    placeholder="Имя"
                    autocomplete="off"
                />
                <small class="ruls" v-for="errors in v$.firstName.$errors">{{ errors.$message }}</small>   
                <MyInput
                    v-model.trim="state.lastName"
                    type="text" 
                    placeholder="Фамилия"
                    autocomplete="off"
                />
                <small class="ruls" v-for="errors in v$.lastName.$errors ">{{ errors.$message }}</small>    
                    
                <MyInput 
                    v-bind:title="state.message"
                    v-model.trim="state.email"
                    type="text" 
                    placeholder="Почта"
                    autocomplete="off"
                />
                <small class="ruls" v-for="errors in v$.email.$errors ">{{ errors.$message }}</small>    
        
                <MyInput 
                    v-model.trim="state.passw"
                    type="password"
                    placeholder="Пароль"
                    autocomplete="off"
                />
                <small class="ruls" v-for="errors in v$.passw.$errors ">{{ errors.$message }}</small>    
                
                <MyInput 
                    v-model.trim="state.confPass"
                    type="text"  
                    placeholder="Подтверждение пароля"
                    autocomplete="off"
                /> 
                <small class="ruls" v-for="errors in v$.confPass.$errors ">{{ errors.$message }}</small>
                <MyButton  class="reg_form_btn" type="submit">Отправить</MyButton>
            </form>
        </div>  
    </div>
   
         

</template>


<script>
    
    import { regValidate } from '../hooks/RegistrationValid';
    export default{
        setup(props){
            const {state, v$, handlerSubmit} = regValidate();
            return{
                state, 
                v$,
                handlerSubmit,   
            }
        },
        methods:{
           
           
            
        //    async registration() {
        //         try{
        //             const response = await axios.post()
        //         }catch(e){

        //         }
        //     }
        }
    }

</script>

<style src="./style/styleRegistration.css" scoped>
   



</style>