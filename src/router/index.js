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
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) return savedPosition;
  //   // if (to.hash) return { selector: to.hash };
  //   return { x: 0, y: 0 };
  // }
})

export default router
