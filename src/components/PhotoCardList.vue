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
        <card-image 
          :isStandAlone="true" 
          :src="photo.src"
          :ratio="1"
        ></card-image>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import PhotoCard from './PhotoCard'
import CardImage from './CardAssets/CardImage'

export default {
  props: {
    photolist: {required: true, type: Array}
  }, 

  components: {
    // PhotoCard
    CardImage
  }
}
</script>
