export default [
  {
    path: '/user',
    component:resolve => {
      require.ensure(['components/user/index.vue'], () => {
        resolve(require('components/user/index.vue'));
      })
    },
    children: [
    ]
  }
];
