import vueBackTop from './vue-backTop.vue'

export default {
    install: function (Vue) {
        Vue.component('vue-backTop', vueBackTop)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vue-backTop', vueBackTop)
}
