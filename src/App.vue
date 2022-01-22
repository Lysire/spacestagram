<template>
  <v-app v-scroll="getMoreData">
    <v-app-bar
      app
      dark
    >
      <v-toolbar-title 
        class="text-no-wrap"
        id="title"
      > 
        Spacestagram </v-toolbar-title>
      <v-spacer></v-spacer>

      <home-button @back-home="isFavourites = false" />
      <favourites-button @toggle-favs="isFavourites = !isFavourites" />

    </v-app-bar>

    <v-main class="grey lighten-1">
      <template v-if="isFavourites">
        <grid-image-list :photolist="likedphotos" />
      </template>

      <template v-else>
        <grid-image-list :photolist="photos" :isloading="isloading" />
      </template>
    </v-main>

    <go-top-button />
            
  </v-app>
</template>

<script>
import GridImageList from './components/GridImageList'

import HomeButton from './components/Buttons/HomeButton'
import FavouritesButton from './components/Buttons/FavouritesButton'

import GoTopButton from './components/Buttons/GoTopButton'

import { mapState, mapGetters } from 'vuex';

let debounce = require('lodash.debounce')

export default {
  name: 'App',

  components: {
    GridImageList,
    GoTopButton,
    HomeButton,
    FavouritesButton
  },

  data: function() {
    return {
      isFavourites: false,
      isloading: false,
    }
  },

  computed: {
    ...mapState({
      photos: state => state.photos.all
    }),
    ...mapGetters('liked', {
      likedphotos: 'getLikedPhotos'
    })
  },

  methods: {
    getMoreData: debounce(function() {
      if (this.isFavourites) { return } // prevent download in favourites
      let scrolledSoFar = document.documentElement.scrollTop + window.innerHeight
      let threshold = document.documentElement.offsetHeight
      if ((Math.ceil(scrolledSoFar) === threshold)) {
        this.$store.dispatch('photos/getMorePhotos')
      }
    }, 450),
  },

  created() {
    window.addEventListener('beforeunload', e => {
      window.sessionStorage.setItem("likes", JSON.stringify(this.$store.state.liked.likedIds))
      e.returnValue("")
    })
  },

  beforeMount() {
    this.$store.dispatch('photos/getMorePhotos')
  }, 
};
</script>

<style scoped>
#title {
  font-family: 'Dancing Script', cursive;
  font-size: 1.75rem;
  font-weight: 450;
}
</style>