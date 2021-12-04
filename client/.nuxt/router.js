import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _065e4481 = () => interopDefault(import('../pages/company.vue' /* webpackChunkName: "pages/company" */))
const _5bf6e9e3 = () => interopDefault(import('../pages/write.vue' /* webpackChunkName: "pages/write" */))
const _7e72849a = () => interopDefault(import('../pages/post/_key.vue' /* webpackChunkName: "pages/post/_key" */))
const _2abe2f94 = () => interopDefault(import('../pages/search/_query.vue' /* webpackChunkName: "pages/search/_query" */))
const _2f7c140a = () => interopDefault(import('../pages/topics/_id.vue' /* webpackChunkName: "pages/topics/_id" */))
const _7fa80956 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _065e4481,
    name: "company"
  }, {
    path: "/write",
    component: _5bf6e9e3,
    name: "write"
  }, {
    path: "/post/:key?",
    component: _7e72849a,
    name: "post-key"
  }, {
    path: "/search/:query?",
    component: _2abe2f94,
    name: "search-query"
  }, {
    path: "/topics/:id?",
    component: _2f7c140a,
    name: "topics-id"
  }, {
    path: "/",
    component: _7fa80956,
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
