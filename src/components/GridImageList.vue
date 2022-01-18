<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        v-for="photo in photolist"
        :key="photo.date"
        xs="8"
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
    photolist: {required: true, type: Array}
  }, 

  components: {
    GridImage
  }
}
</script>
