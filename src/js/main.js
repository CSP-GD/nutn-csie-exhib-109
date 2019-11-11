import "core-js/stable"
import "regenerator-runtime/runtime"
import Vue from "vue"

import home from "../vue/home.vue"
import info from "../vue/info.vue";
import gradient from "../vue/gradient.vue";
import main from "../vue/main.vue"

new Vue(main).$mount('#main')