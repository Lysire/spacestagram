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
      <v-btn icon>
        <v-icon>mdi-shuffle</v-icon>
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

export default {
  name: 'App',

  components: {
    PhotoCardList,
    GoTopButton,
  },

  computed: mapState({
    photos: state => state.photos.all
  }),

  created() {
    this.$store.dispatch('photos/getMorePhotos')

    window.addEventListener('beforeunload', e => {
      window.sessionStorage.setItem("likes", JSON.stringify(this.$store.state.liked.likedIds))
      e.returnValue("")
    })
  }
};
</script>