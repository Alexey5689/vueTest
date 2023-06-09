import {createRouter, createWebHistory} from 'vue-router';
import store from '../store/index.js';
import { routes } from  './routes.js';



const router = createRouter({
    routes,
    history: createWebHistory(),
})
//защинта роутинга
router.beforeEach((to, from)=>{
    // if(!store.state.auth && to.name === 'profile'){
    //     alert("Вы не авторизованы");
    //     return { name:'LogIn' };
    // }
    //новая логика защиты роутинга
    if(to.meta.auth && !store.state.auth){
            alert("Вы не авторизованы");
            return { name:'LogIn' };
    }
})

export default router;
