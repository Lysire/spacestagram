<template>
  <v-app v-scroll="getMoreData">
    <v-app-bar
      app
      dark
    >
      <v-toolbar-title class="text-no-wrap"> Spacestagram </v-toolbar-title>
      <v-spacer></v-spacer>

      <home-button @back-home="isFavourites = false" />
      <favourites-button @toggle-favs="isFavourites = !isFavourites" />

    </v-app-bar>

    <v-main class="grey lighten-1">
      <template v-if="isFavourites">
        <grid-image-list :photolist="likedphotos" />
      </template>

      <template v-else>
        <grid-image-list :photolist="photos" />
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
      isLoading: true,
      isFavourites: false,
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
      let scrolledSoFar = document.documentElement.scrollTop + window.innerHeight
      let threshold = 0.95 * document.documentElement.offsetHeight
      if ((scrolledSoFar > threshold) && !this.isLoading) {
        this.isLoading = true
        this.$store.dispatch('photos/getMorePhotos')
        this.isLoading = false
      }
    }, 300),
  },

  created() {
    window.addEventListener('beforeunload', e => {
      window.sessionStorage.setItem("likes", JSON.stringify(this.$store.state.liked.likedIds))
      e.returnValue("")
    })
  },

  beforeMount() {
    this.isLoading = true
    this.$store.dispatch('photos/getMorePhotos')
    this.isLoading = false
  }, 
};
</script>