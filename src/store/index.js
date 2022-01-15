import Vue from 'vue'
import Vuex from 'vuex'

import photos from './modules/photos'
import liked from './modules/liked'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        photos,
        liked
    }
})