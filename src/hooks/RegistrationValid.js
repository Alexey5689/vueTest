import { reactive, computed} from 'vue'
import { helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength} from '@vuelidate/validators';
import { sameAs } from '@vuelidate/validators';
import { useStore } from 'vuex';



export function regValidate(){
    const alfa = helpers.regex(/^[a-zA-Zа-яёА-ЯЁ]*$/);
    const bbt = helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{8,24}$/);
       
        const state = reactive({
            store: useStore(),
            isReg:false,
            firstName:'',
            lastName:'',
            email:'',
            passw:'',
            confPass:'',
            message:'Шаблон почты аааааа@aa.com'
        })
        const rules = computed (()=>{
            return{
            firstName:{
                required: helpers.withMessage('Поле обязательно к заполнению', required), 
                minLength: helpers.withMessage('Не должно содержать меньше 3х знаков', minLength(3)),
                alfa: helpers.withMessage('Должно содержать только буквы', alfa),
                maxLength: helpers.withMessage('Не должно содержать больше 23х знаков', maxLength(23))
            },
            lastName:{
                required: helpers.withMessage('Поле обязательно к заполнению', required), 
                minLength:  helpers.withMessage('Не должно содержать меньше 3х знаков', minLength(3)),
                maxLength: helpers.withMessage('Не должно содержать больше 23х знаков', maxLength(23)),
            },
            email:{
                required: helpers.withMessage('Поле обязательно к заполнению', required), 
                email: helpers.withMessage('Не корректный email',email)},
            passw:{
                required: helpers.withMessage('Поле обязательно к заполнению', required),
                minLength:  helpers.withMessage('Не должно содержать меньше 8ми знаков', minLength(8)),
                //sameAsPassword: helpers.withMessage('Значения не совпадают',  sameAs(state.confPass)),
                //sameAs: helpers.withMessage('Значения не совпадают', sameAs(state.confPass)),
                sameAs: helpers.withMessage('Значения не совпадают', sameAs( state.confPass)),
                maxLength: helpers.withMessage('Не должно содержать больше 23х знаков', maxLength(23)),
                bbt: helpers.withMessage('Должен содержать латинские буквы, буквы в верхнем регистре, цифры и символы(!@#$%_)',bbt)
            },
            confPass:{
                required: helpers.withMessage('Поле обязательно к заполнению', required), 
                //sameAsPassword:  helpers.withMessage('Значения не совпадают',  sameAs(state.passw)),
                sameAs: helpers.withMessage('Значения не совпадают', sameAs(state.passw)),
            },
            }
        })
        const v$ = useVuelidate(rules, state);
    
        function handlerSubmit (){  
           
            if(this.v$.$invalid){
                this.v$.$touch();
                return;
            };
            
            localStorage.userTest = JSON.stringify({
                name: state.firstName,
                lastname: state.lastName,
                email: state.email,
                password: state.passw,
            });
            const formData={
                name: state.firstName,
                lastName: state.lastName,
                email: state.email,
                password:state.passw
            }
            console.log(formData);

            state.isReg= true;
            state.firstName = '';
            state.lastName = '';
            state.email = '';
            state.passw = '';
            state.confPass = '';
            // let user = JSON.parse(localStorage.user);
            // console.log(user);
            // window.location.href='/profile';
        }
       
        return{state, v$, handlerSubmit}
}
