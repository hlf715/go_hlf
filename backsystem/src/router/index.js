import Vue from 'vue'
import Router from 'vue-router'
import WorkBench from '@/components/workbench/WorkBench'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WorkBench',
      component: WorkBench
    }
  ]
})
