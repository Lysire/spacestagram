<template>
  <v-img
    :src="src"
    :aspect-ratio="ratio"
  >
    <template v-slot:placeholder>
      <photo-loading-icon />
    </template>
  </v-img>
</template>

<script>
import PhotoLoadingIcon from './PhotoLoadingIcon'

export default {
  name: 'CardImage',

  components: {
    PhotoLoadingIcon
  },

  props: {
    src: {type: String},
    ratio: {type: Number, default: undefined},
  }
}
</script>