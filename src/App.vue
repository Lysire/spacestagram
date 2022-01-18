<template>
  <v-app v-scroll="getMoreData">
    <v-app-bar
      app
      color='primary'
      dark
    >
      <v-toolbar-title class="text-no-wrap"> Discover Astronomy Photos </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- pictures in card view -->
    <template v-if="isLoading">
      <v-progress-circular v-show="isLoading"
        indeterminate
        color="grey-lighten-5"
      ></v-progress-circular>
    </template>

    <grid-image-list :photolist="photos" />

    <go-top-button />
            
  </v-app>
</template>

<script>
import GridImageList from './components/GridImageList';
import GoTopButton from './components/Buttons/GoTopButton';

import { mapState } from 'vuex';

let debounce = require('lodash.debounce')

export default {
  name: 'App',

  components: {
    GridImageList,
    GoTopButton,
  },

  data: function() {
    return {
      isLoading: true,
    }
  },

  computed: mapState({
    photos: state => state.photos.all
  }),

  methods: {
    getMoreData: debounce(function() {
      let scrolledSoFar = document.documentElement.scrollTop + window.innerHeight
      let threshold = 0.95 * document.documentElement.offsetHeight
      console.log(scrolledSoFar + ' ' + threshold)
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