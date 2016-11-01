export default [
  {
    path: '/about',
    component:resolve => {
      require.ensure(['components/about/index.vue'], () => {
        resolve(require('components/about/index.vue'));
      })
    },
    children: [
    ]
  }
];
