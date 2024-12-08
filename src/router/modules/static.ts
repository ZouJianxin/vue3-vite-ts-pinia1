const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../../views/home/index.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../../views/about/index.vue') //路由懒加载
    },
    {
      path: '/goods',
      name: 'Goods',
      component: () => import('../../views/goods/index.vue') //路由懒加载
    }
  ]
  
  export default routes