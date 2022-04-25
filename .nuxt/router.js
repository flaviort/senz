import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bea9cba = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _8399aae6 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1099d646 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _55af0a7e = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _2ba2777f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d140f210 = () => interopDefault(import('../pages/_projects/lp-fitness.vue' /* webpackChunkName: "pages/_projects/lp-fitness" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0bea9cba,
    name: "About"
  }, {
    path: "/contact",
    component: _8399aae6,
    name: "Contact"
  }, {
    path: "/projects",
    component: _1099d646,
    name: "Projects"
  }, {
    path: "/services",
    component: _55af0a7e,
    name: "Services"
  }, {
    path: "/",
    component: _2ba2777f,
    name: "Home"
  }, {
    path: "/:projects/lp-fitness",
    component: _d140f210,
    name: "LP Fitness"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
