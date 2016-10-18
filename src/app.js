import Vue from 'vue'
import VueTouch from 'vue-touch'
import Quasar from 'quasar'
import Router from './router'

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}


// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require('./themes/app.' + __THEME + '.styl')
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require('quasar/dist/quasar.' + __THEME + '.css')
// ==============================

Quasar.theme.set(__THEME)

Vue.use(VueTouch) // Touch events
// Vue.use(VueResource) // Ajax Requests
Vue.use(Quasar) // Install Quasar Framework

Quasar.start(() => {
  Router.start(Vue.extend({}), '#quasar-app')
})
