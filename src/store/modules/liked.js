import { getFromStorage } from '@/api/all'

// initial state
let initLikes = getFromStorage()
const state = () => ({
    likedIds: initLikes, // each photo is identified with its date (id)
})

// getters
const getters = {
    getIsLiked: state => ({ dateId }) => {
        return state.likedIds.findIndex(item => item === dateId) != -1
    },

    getLikedPhotos: (state) => {
        return state.likedIds
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
        state.likedIds.push(dateId)
    },

    deleteFromLiked(state, dateId) {
        const idxToDelete = state.likedIds.findIndex(item => item === dateId)
        if (idxToDelete != -1) {
            state.likedIds.splice(idxToDelete, 1)
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