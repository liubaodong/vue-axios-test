import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )

import '@/assets/font/iconfont.css'

import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';
import {
    request
} from './network/request'

Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

request({
        url: 'posts'
    })
    .then(
        res => console.log(res)
    )
    .catch(err => {
        throw (err)
    })