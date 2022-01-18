<template>
  <v-img
    :src="src"
    :aspect-ratio="ratio"
  >
    <template v-slot:placeholder>
      <loading-icon />
    </template>
  </v-img>
</template>

<script>
import LoadingIcon from './LoadingIcon'

export default {
  name: 'CardImage',

  components: {
    LoadingIcon
  },

  props: {
    src: {type: String},
    ratio: {type: Number, default: undefined},
  }
}
</script>