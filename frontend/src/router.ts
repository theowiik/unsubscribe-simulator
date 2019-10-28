import Vue from 'vue';
import Router from 'vue-router';
import ThankYou from './views/ThankYou.vue';
import Level0 from './views/Level0.vue';
import Level1 from './views/Level1.vue';
import Level2 from './views/Level2.vue';
import Level3 from './views/Level3.vue';
import Level4 from './views/Level4.vue';
import Level5 from './views/Level5.vue';

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
    {
      path: '/3',
      name: '3',
      component: Level3,
    },
    {
      path: '/4',
      name: '4',
      component: Level4,
    },
    {
      path: '/5',
      name: '5',
      component: Level5,
    },
  ],
});
