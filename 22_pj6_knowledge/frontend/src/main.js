import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import { store } from './config/store'
import './config/boostrap'

import App from './App'

Vue.config.productionTip = false

new Vue( {
  store,
  render: h => h( App )
} ).$mount( '#app' )
