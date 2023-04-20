import {createStore} from "vuex";
import { PostModul } from "./PostModul.js";
import { TestModul } from "./PostModul.js";

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
           
        },
        mutations:{
           changeTime(state){
                state.time = new Date().toLocaleString();
           }
        },
        actions:{
            changeTimeAsync({commit}){
                setInterval(()=>{
                    commit('changeTime')
                },1000);
            },
        },
        modules:{
            post: PostModul,
            test: TestModul,
           
        }

})