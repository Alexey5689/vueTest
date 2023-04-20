import { reactive, computed} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers} from '@vuelidate/validators'


 export function validate(){
        const state = reactive({
            email:'',
            passw:'',
            message:'Шаблон почты аааааа@aa.com',
        })
        const rules= computed(()=>{
            return{
                email:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),   
                },
                passw:{
                    required: helpers.withMessage('Поле обязательно к заполнению', required),  
                },
            } 
        })
        const v$ = useVuelidate(rules, state);
        return {  v$, state }
        
    };

    //email, minLength,
    //import { useStore } from 'vuex'
//import { mapActions, mapMutations, mapState } from 'vuex';
    //user: '',
     // email: helpers.withMessage('Не корректный email',email),  
    // store: useStore(),
            // auth: false,
            // gard: false,
    // minLength:  helpers.withMessage('Не должно содержать меньше 3х знаков', minLength(3)),  
    //state,
    // , state
        // function handlerSubmit () {
        //     if(this.v$.$invalid){
        //         this.v$.$touch();
        //         return;
        //     }

        // }
            // if(!state.user){
            //     state.user=JSON.parse(localStorage.user)
            //     if (state.user.email !== state.email || state.user.password !== state.passw){
            //         state.gard = true;
            //         return;
            //     };
                
            // }
           
          
            // const store = useStore();
            // return{
            //     changeAuth:()=>store.commit('changeAuth')
            // };
            // function setup(){
            //     return{
            //         changeAuthAsync: ()=>state.store.dispatch('changeAuthAsync'),
            //     }
            // }

            
            // state.isauth= true;
            // localStorage.user= JSON.stringify({
            //     email: state.email,
            //     password: state.passw,
            // });
            // user = JSON.parse(localStorage.user);
            //localStorage.setItem('auth', true);
            // state.store.state.auth = localStorage.getItem(auth);
            // state.email = '';
            // state.passw = '';
            // setInterval(()=>{
            //     window.location.href = '/profile';
            // }, 1000)  
            
      
        // function setup () {
        //     const store = useStore()
        
        //     return {
        //       // access a mutation
        //       increment: () => store.commit('increment'),
        
        //       // access an action
        //       asyncIncrement: () => store.dispatch('asyncIncrement')
        //     }
        // }
      // handlerSubmit
