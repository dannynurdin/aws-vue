import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Camera from '../views/Camera.vue'
import Absent from '../views/Absent.vue'
import Record from '../views/Record.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // meta: { requiresAuth: true }
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera
  },
  {
    path: '/absent',
    name: 'Absent',
    component: Absent
  },
  {
    path: '/record',
    name: 'Record',
    component: Record
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
      if (data && data.signInUserSession) {
        user = data;
      next()
      } 
    }).catch((e) => {
      console.log(e)
    });
    if (!user) {
      next({path:'/'});
    }
    next()
  }
  next()
})

export default router
