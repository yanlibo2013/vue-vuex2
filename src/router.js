import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './shopping-car/components/App.vue';

//require.ensure是webpack用来代码分割的，可以按需加载
const Login = resolve => {
    require.ensure(['./views/login.vue'], () => {
        resolve(require('./views/login.vue'));
    })
};

const User = resolve => {
    require.ensure(['./views/user.vue'], () => {
        resolve(require('./views/user.vue'));
    })
};

Vue.use(VueRouter);
const router = new VueRouter({
    /*mode: 'history',
     linkActiveClass: 'active',*/
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/user', component: User}
    ]
});

export default router;
