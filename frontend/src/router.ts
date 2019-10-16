import Vue from 'vue';
import Router from 'vue-router';
import ThankYou from './views/ThankYou.vue';
import Level0 from './views/Level0.vue';
import Level1 from './views/Level1.vue';
import Level2 from './views/Level2.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ThankYou',
      component: ThankYou,
    },
    {
      path: '/0',
      name: '0',
      component: Level0,
    },
    {
      path: '/1',
      name: '1',
      component: Level1,
    },
    {
      path: '/2',
      name: '2',
      component: Level2,
    },
  ],
});
