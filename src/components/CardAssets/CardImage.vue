<template>
  <v-card>
    <v-img
      :src="src"
      aspect-ratio="1"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            :color="color"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <!-- v-if for overlay to reuse component in PhotoCard -->

  </v-card>
</template>

<script>
export default {
  name: 'CardImage',

  props: {
    src: {type: String},
    color: {type: String, default: "black lighten-5"}
  }
}
</script>