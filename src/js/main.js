import "core-js/stable"
import "regenerator-runtime/runtime"
import Vue from "vue"

import index from "../vue/index.vue"

new Vue(index).$mount('#main')