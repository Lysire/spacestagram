<template>
  <v-app>
    <v-app-bar
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

  computed: mapState({
    photos: state => state.photos.all
  }),

  methods: {
    getMoreData() {
      window.onscroll = debounce(() => {
        let isBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight
        console.log(isBottom)
        if (isBottom) {
          this.$store.dispatch('photos/getMorePhotos')
        }
      }, 10)
    }
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

  mounted() {
    this.getMoreData()
  }
};
</script>