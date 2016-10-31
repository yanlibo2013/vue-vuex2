import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './shopping-car/components/App.vue';


//异步组件
import {Login,User,Regist,About} from './views/index'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
     linkActiveClass: 'active',
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/user', component: User},
       /* {path: '/regist', component: Regist},
        {path: '/about', component: Regist}*/
    ]
});

export default router;
