/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 */
import Vue from 'vue'
import App from './app.vue'
import router from './router';
import store from './store'


new Vue({
 store,
 router,
 ...App
 }).$mount('#app');

/*new Vue({
    /!*Store,*!/
    router,
    ...App
}).$mount('#app');*/



