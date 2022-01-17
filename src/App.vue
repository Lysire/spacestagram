<template>
  <v-app>
    <v-app-bar
      color='primary'
      dark
    >
      <v-toolbar-title class="text-no-wrap"> Discover Astronomy Photos </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- refactor later -->
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- pictures in card view -->
    <photo-card-list :photolist="photos" />
    
    <go-top-button />
            
  </v-app>
</template>

<script>
import PhotoCardList from './components/PhotoCardList';
import GoTopButton from './components/Buttons/GoTopButton';

import { mapState } from 'vuex';

let debounce = require('lodash.debounce')

export default {
  name: 'App',

  components: {
    PhotoCardList,
    GoTopButton,
  },

  computed: mapState({
    photos: state => state.photos.all
  }),

  methods: {
    getMoreData() {
      window.onscroll = debounce(() => {
        let isBottom = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
        if (isBottom) {
          this.$store.dispatch('photos/getMorePhotos')
        }
      }, 200);
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