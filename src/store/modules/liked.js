// initial state
const state = () => ({
    liked: [], // each photo is identified with its date (id)
})

// getters
const getters = {
    getIsLiked: state => ({ dateId }) => {
        return state.liked.findIndex(item => item === dateId) != -1
    },

    getLikedPhotos: (state) => {
        return state.liked
    }
}

// actions
const actions = {
    addLiked({ commit }, { dateId }) {
        commit('saveToLiked', dateId)
    },

    removeLiked({ commit }, { dateId }) {
        commit('deleteFromLiked', dateId)
    }
}

// mutations
const mutations = {
    saveToLiked(state, dateId) {
        state.liked.push(dateId)
    },

    deleteFromLiked(state, dateId) {
        const idxToDelete = state.liked.findIndex(item => item === dateId)
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