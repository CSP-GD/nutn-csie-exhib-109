import "core-js/stable"
import "regenerator-runtime/runtime"
import Vue from "vue"

import main from "../vue/main.vue"
import test from "../vue/test/test.vue"


// new Vue(test).$mount('#main')
new Vue(main).$mount('#main')