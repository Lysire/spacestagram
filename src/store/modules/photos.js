import getFromNasaApi from '@/api/download'

// initial state
const state = () => ({
    isFirstAdd: true,
    all: []
})

// getters
const getters = {}

// actions
const actions = {
    getMorePhotos({ commit }) {
        getFromNasaApi(photos => {
            commit('addPhotos', photos)
        })
    }
}

// mutations
const mutations = {
    addPhotos(state, photos) {
        if (state.isFirstAdd) {
            state.all = photos
            state.isFirstAdd = false
        } else {
            state.all.push(...photos)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
