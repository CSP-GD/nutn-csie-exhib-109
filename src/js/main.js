import "core-js/stable"
import "regenerator-runtime/runtime"
import Vue from "vue"

import main from "../vue/main.vue"
import tag from "../vue/components/tag.vue"

// new Vue(tag).$mount('#main')
new Vue(main).$mount('#main')