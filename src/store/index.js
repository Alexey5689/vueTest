import {createStore} from "vuex";
import { PostModul } from "./PostModul.js";
import { TestModul } from "./TestStore.js";

//import auth from './auth.modul.js';
const auth = JSON.parse(localStorage.getItem('auth'));
export default createStore({
        state: ()=>({
            time: new Date().toLocaleString(),
            auth: auth,
            // auth: localStorage.getItem('auth'),
            // isReg: false,
            show: false,
        }),
        getters:{
           stateShow(state){
                return state.show
           }
        },
        mutations:{
           changeTime(state){
                state.time = new Date().toLocaleString();
           },
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
            toggleShowState({commit}){
                commit('changeStateShow')
            }
        },
        modules:{
            post: PostModul,
            test: TestModul,
           
        }

})