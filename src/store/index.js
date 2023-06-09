import {createStore} from "vuex";
import { PostModul } from "./PostModul.js";
import { TestModul } from "./TestStore.js";

//import auth from './auth.modul.js';
const auth = JSON.parse(localStorage.getItem('auth'));//сохранение в lockalstorage
export default createStore({
        state: ()=>({
            time: new Date().toLocaleString(),
            auth: auth,
            // auth: localStorage.getItem('auth'),
            // isReg: false,
            // модальное окно
            show: false,
        }),
        getters:{
            // модальное окно
           stateShow(state){
                return state.show
           },
           stateAuth(state){
                return state.auth
           }
        },
        mutations:{
           changeTime(state){
                state.time = new Date().toLocaleString();
           },

           //авторизация
           changAuth(state){
                state.auth = true;
           },

           // модальное окно
           changeStateShow(state){
                state.show = !state.show;
           }
          
        },
        actions:{
            changeTimeAsync({commit}){
                setInterval(()=>{
                    commit('changeTime')
                },1000);
            },
             // модальное окно
            toggleShowState({commit}){
                commit('changeStateShow')
            },
            //авторизация
            startChangeAuth({commit}){
                commit('changAuth')
            }
        },
        modules:{
            post: PostModul,
            test: TestModul,
            //подключение модулей
           
        }

})