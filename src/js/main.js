import "core-js/stable"
import "regenerator-runtime/runtime"
import Vue from "vue"

import main from "../vue/main.vue"

new Vue(main).$mount('#main')