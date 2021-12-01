import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d33b3722 = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _1ce2ca3e = () => interopDefault(import('..\\pages\\post\\_key.vue' /* webpackChunkName: "pages/post/_key" */))
const _0c0ad1ef = () => interopDefault(import('..\\pages\\search\\_query.vue' /* webpackChunkName: "pages/search/_query" */))
const _ba8d2bf0 = () => interopDefault(import('..\\pages\\topics\\_id.vue' /* webpackChunkName: "pages/topics/_id" */))
const _246f4cc4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/company",
    component: _d33b3722,
    name: "company"
  }, {
    path: "/post/:key?",
    component: _1ce2ca3e,
    name: "post-key"
  }, {
    path: "/search/:query?",
    component: _0c0ad1ef,
    name: "search-query"
  }, {
    path: "/topics/:id?",
    component: _ba8d2bf0,
    name: "topics-id"
  }, {
    path: "/",
    component: _246f4cc4,
    name: "index"
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
