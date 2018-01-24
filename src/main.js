// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import Hot from './components/hot/Hot.vue'
import Bon from './components/bon/Bon.vue'
import Rkg from './components/rkg/Rkg.vue'


import hotdetails from './components/details/hotdetails.vue'
import bondetails from './components/details/bondetails.vue'
import rkgdetails from './components/details/rkgdetails.vue'


import {adaptive} from './assets/js/adaptive'
adaptive();

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);
Vue.use(VueRouter);
Vue.config.productionTip = false

const r = new VueRouter({
  routes:[
    {path:'/h',component:Hot,children:[
      {path:'hotdetaiis/:index/:hot',component:hotdetails,name:'hotd'}
    ]},
    {path:'/b',component:Bon,children:[
      {path:'bondetail/:index/:hot',component:bondetails,name:'bond'}
    ]},
    {path:'/r',component:Rkg,children:[
      {path:'rkgdetail/:index/:hot',component:rkgdetails,name:'rkgd'}
    ]},
    {path:'/',redirect:'/h'}
    /**/

  ]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:r
})


