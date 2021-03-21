import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Quizzes from '../views/quizzes.vue'
import QuizDetail from '../views/quiz-detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quizzes',
    component: Quizzes,
    // name: 'start',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/quizzes.vue')
  },
  {
    path: '/quizzes/:id',
    component: QuizDetail,
    component: () => import(/* webpackChunkName: 'about' */ '../views/quiz-detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
