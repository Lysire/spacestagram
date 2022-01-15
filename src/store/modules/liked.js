// initial state
// for persisting likes, we store the object
const state = () => ({
    liked: [],
})

// getters
const getters = {
    getLikedPhotos: (state) => {
        return state.liked
    }
}

// actions
const actions = {
    addLiked({ commit }, photo) {
        commit('saveToLiked', photo)
    },

    removeLiked({ commit }, photo) {
        commit('deleteFromLiked', photo)
    }
}

// mutations
const mutations = {
    saveToLiked(state, photo) {
        state.liked.push(photo)
    },

    deleteFromLiked(state, photo) {
        const idxToDelete = state.liked.findIndex(item => item.date === photo.date)
        if (idxToDelete != -1) {
            state.liked.splice(idxToDelete, 1)
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