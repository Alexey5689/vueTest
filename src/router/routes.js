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
        // component: ()=> import ('../pages/Profile.vue'),
        component: Profile, 
        children:[
            {
                path: '',
                // component:() => import('../components/UI/Images3.vue'),
                component: AddImage,
               
            },
            {
                path: 'images',
                // component:() => import('../components/UI/Images.vue'), 
                component: Images
            },
            {
                path: 'images2',
                // component:() => import('../components/UI/Images2.vue'), 
                component: Images2
            },
            {
                path: 'images3',
                // component:() => import('../components/UI/Images3.vue'),
                component: Images3
            },
            {
                path: 'postPage',
                // component:() => import('../components/UI/Images3.vue'),
                component: postPage
            },
            {
                path: 'ToDo',
                name: 'ToDo',
                // component:() => import('../components/UI/Images3.vue'),
                component: ToDo,
            },
            {
                path: 'testStore',
                name: 'TestStore',
                // component:() => import('../components/UI/Images3.vue'),
                component: TestStore,
            },
           
        ],
       
    }
  
]
