import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboardRoutes from './dashboard.routes'
// import goTo from 'vuetify/lib/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    ...dashboardRoutes
  },


]

const router = new VueRouter({
  mode: "history",
  routes,
  // scrollBehavior: (to, from, savedPosition) => {
  //   let scrollTo = 0

  //   if (to.hash) {
  //     scrollTo = to.hash
  //   } else if (savedPosition) {
  //     scrollTo = savedPosition.y
  //   }

  //   return goTo(scrollTo)
  // },
})

export default router
