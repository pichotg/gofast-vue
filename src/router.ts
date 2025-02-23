import NProgress from 'nprogress'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  routes: setupLayouts(routes),
  history: createWebHistory(import.meta.env.BASE_URL),
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export { router }
