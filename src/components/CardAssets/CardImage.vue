<template>
  <v-hover>
    <template v-slot:default="{ hover }">
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

        <!-- show overlay if it's in grid -->
        <template v-if="isStandAlone">
          <v-fade-transition>
            <v-overlay
              v-if="hover"
              absolute
            >
              <v-btn plain>Find Out More</v-btn>
            </v-overlay>
          </v-fade-transition>
        </template>

      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: 'CardImage',

  props: {
    src: {type: String},
    ratio: {type: Number, default: undefined},
    color: {type: String, default: "black lighten-5"},
    isStandAlone: {type: Boolean, default: false}
  }
}
</script>