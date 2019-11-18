import "core-js/stable"
import "regenerator-runtime/runtime"
import Vue from "vue"

import main from "../vue/main.vue"

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

new Vue(main).$mount('#main')