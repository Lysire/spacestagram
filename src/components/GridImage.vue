<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card>
        <card-image :src="photo.src" :ratio="1"/>

        <v-fade-transition>
          <v-overlay
            z-index="0"
            v-if="hover"
            absolute
          >
            <v-btn 
              plain
              @click="dialog = true"
            >
              Find Out More
            </v-btn>
          </v-overlay>
        </v-fade-transition>
          
        <v-dialog
          v-model="dialog"
          fullscreen
        >
          <v-container fluid>
            <v-row class="d-flex align-center justify-center">
              <v-col :cols="10">
                <v-card>
                  <photo-card v-bind="photo" />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-dialog>

      </v-card>
    </template>
  </v-hover>
</template>

<script>
import CardImage from './Image/CardImage'
import PhotoCard from './PhotoCard'

export default {
  name: 'GridImage',

  components: {
    CardImage,
    PhotoCard
  },

  data: () => ({
    dialog: false
  }),

  props: {
    photo: {type: Object, required: true}
  }
}
</script>