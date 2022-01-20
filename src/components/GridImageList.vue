<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        v-for="photo in photolist"
        :key="photo.date"
        cols="12"
        xs="10"
        sm="6"
        md="4"
      >
        <grid-image :photo="photo" />
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
import GridImage from './GridImage'

export default {
  props: {
    photolist: {type: Array, required: true}
  }, 

  components: {
    GridImage
  }
}
</script>
