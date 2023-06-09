import Main from '../pages/Main.vue';
import Registration from '../pages/Registration.vue'
import Entrance from '../pages/Entrance.vue';
import Profile from '../pages/Profile.vue';
import Images from '../components/UI/Images.vue';
import Images2 from '../components/UI/Images2.vue';
import Images3 from '../components/UI/Images3.vue';
import AddImage from '../components/UI/AddImage.vue';
import postPage from '../components/UI/postPage.vue';
import ToDo from '../components/UI/ToDoList.vue';
import TestStore from '../components/testStore.vue';
export const routes=[
    {
        path:'/',
        component: Main,
    },
    {
        path:'/registration',
        component:Registration,
    },
    {
        name: 'LogIn',
        path:'/entrance',
        component: Entrance,
    },
    {
        name: 'profile',
        path: '/profile/',
        // component: ()=> import ('../pages/Profile.vue'), подключение компонентов
        component: Profile, 
        meta: { auth: true},//защита роутинга
        children:[
            {
                path: '',
                name: 'AddImage',
                // component:() => import('../components/UI/Images3.vue'),
                component: AddImage,
                meta: { auth: true}
            },
            {
                path: 'images',
                // component:() => import('../components/UI/Images.vue'), 
                component: Images,
                meta: { auth: true}
            },
            {
                path: 'images2',
                // component:() => import('../components/UI/Images2.vue'), 
                component: Images2,
                meta: { auth: true}
            },
            {
                path: 'images3',
                // component:() => import('../components/UI/Images3.vue'),
                component: Images3,
                meta: { auth: true}
            },
            {
                path: 'postPage',
                // component:() => import('../components/UI/Images3.vue'),
                component: postPage,
                meta: { auth: true}
            },
            {
                path: 'ToDo',
                name: 'ToDo',
                // component:() => import('../components/UI/Images3.vue'),
                component: ToDo,
                meta: { auth: true}
            },
            {
                path: 'testStore',
                name: 'TestStore',
                // component:() => import('../components/UI/Images3.vue'),
                component: TestStore,
                meta: { auth: true}
            },
           
        ],
       
    }
  
]
