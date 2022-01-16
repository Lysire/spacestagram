<template>
  <v-app>
    <v-app-bar
      src="./assets/background.jpg"
      dark
    >
      <v-toolbar-title class="text-no-wrap"> Discover Astronomy Photos </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- pictures in card view -->
    <v-container fluid>
      <v-row dense justify="center">
        <v-col
          v-for="photo in photos"
          :key="photo.date"
          cols="12"
          xs="12"
          sm="10"
          md="9"
        >
          <PhotoCard 
            v-bind="photo"
          ></PhotoCard>
        </v-col>
      </v-row>
    </v-container>
            
  </v-app>
</template>

<script>
import PhotoCard from './components/PhotoCard';
import { mapState } from 'vuex';

export default {
  name: 'App',

  components: {
    PhotoCard,
  },

  computed: mapState({
    photos: state => state.photos.all
  }),

  created() {
    this.$store.dispatch('photos/getMorePhotos')
  }
};
</script>