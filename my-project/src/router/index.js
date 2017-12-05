import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UploadFile from '@/components/UploadFile'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/upload',
      name: 'UploadFile',
      component: UploadFile
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
