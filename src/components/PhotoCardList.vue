<template>
  <v-container fluid>
    <v-row dense justify="center">
      <v-col
        v-for="photo in photolist"
        :key="photo.date"
        xs="8"
        sm="6"
        md="4"
      >
        <photo-card 
          v-bind="photo"
        ></photo-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PhotoCard from './PhotoCard'

export default {
  props: {
    photolist: {required: true, type: Array}
  }, 

  components: {
    PhotoCard
  }
}
</script>
