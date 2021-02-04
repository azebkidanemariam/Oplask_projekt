import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleImage from  '../views/SingleImage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single-image',
    name: 'SingleImage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SingleImage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

 export default router
const BASE_URL= 'https://api.unsplash.com/search/photos?page=1&query=birthday&client_id=zXErmLe38aW7y1IEI12Fct0Q_AlmmIsu1uEGT3iH2Ws'

export async function fetchImages(page=1){
  const request = await fetch(`${BASE_URL}/photos?page=${page}`)
  const data = await request.json()["urls"]["raw"]
  return data.results
}