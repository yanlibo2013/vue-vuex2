/*
 * @Author: henry yan
 * @Date:   2016-10-19 16:47:00
 * @Last Modified by:   henry yan
 * @Last Modified time: 2016-10-19 16:47:00
 * @describe 异步组件
*/

//require.ensure是webpack用来代码分割的，可以按需加载

 const Login = resolve => {
    require.ensure(['./login/index.vue'], () => {
        resolve(require('./login/index.vue'));
    })
};
 const User = resolve => {
    require.ensure(['./user/index.vue'], () => {
        resolve(require('./user/index.vue'));
    })
};

 const About = resolve => {
     require.ensure(['./about/index.vue'], () => {
     resolve(require('./about/index.vue'));
     })
 };

const Home = resolve => {
    require.ensure(['./home/index.vue'], () => {
        resolve(require('./home/index.vue'));
    })
};

export {
    Login,
    User,
    About,
    Home
}
