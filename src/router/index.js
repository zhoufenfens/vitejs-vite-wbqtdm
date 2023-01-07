
import * as VueRouter from 'vue-router';
import { shallowRef } from 'vue';
const News = () => import(/* webpackChunkName: "news" */ '../components/news.vue');
const News2 = () => import('../components/news2.vue');

// 判断开发模式不走keep-alive，热更新有报错
const isDev = import.meta.env.MODE === 'development';

export const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    component: News,
    title: 'news',
    name: 'News',
    children: [],
  },
  {
    path: '/news2',
    component: News2,
    title: 'news2',
    name: 'News2',
    children: [],
  },

];

const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;



