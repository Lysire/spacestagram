// initial state
const state = () => ({
    liked: [],
})

// getters
const getters = {
    likedPhotos: (state, rootState) => {
        return state.liked.map(({title}) => {
            const photo = rootState.photos.all.find(photo => photo.title === title)
            return photo
        })
    }
}

// actions
const actions = {

}

// mutations
const mutations = {
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}