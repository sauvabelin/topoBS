import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
function load (name) {
  if (process.env.NODE_ENV === 'development') {
    return require('components/' + name + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + name + '.vue')(resolve)
    }
  }
}

let routes = {
    '*': {
        component: load('error404')
    },

    '/': {
        component: load('index')
    },

    '/facile': {
        component: load('facile')
    },

    'moyen': {
        component: load('moyen')
    },
    
    'difficile': {
        component: load('difficile')
    }

}

let Router = new VueRouter()
Router.map(routes)

export default Router
