import Vue from 'vue'
import VueRouter from 'vue-router'

//异步组件
import {Login,User,About,Home} from './components/index'
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "hash",
    base: __dirname,
    routes: [
        {
            path: "/",
            redirect: {
                name: "home"
            },
        }, {
            path: "/home",
            name: 'home',
            component:Home
        },
        {path: '/about', component: About},
        {path: '/user', component: User},

    ]
});

export default router;
