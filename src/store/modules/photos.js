import getFromNasaApi from '@/api/download'

// previous requests
let datesCalled = new Set()

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
      getFromNasaApi((dateId, photos) => {
          if (!photos || datesCalled.has(dateId)) { return }
          datesCalled.add(dateId)
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
