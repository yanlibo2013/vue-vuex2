/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 * @describe 异步组件
 */

//require.ensure是webpack用来代码分割的，可以按需加载
export const Login = resolve => {
    require.ensure(['./login.vue'], () => {
        resolve(require('./login.vue'));
    })
};

export const User = resolve => {
    require.ensure(['./user.vue'], () => {
        resolve(require('./user.vue'));
    })
};

export const Regist = resolve => {
    require.ensure(['./regist.vue'], () => {
        resolve(require('./regist.vue'));
    })
};