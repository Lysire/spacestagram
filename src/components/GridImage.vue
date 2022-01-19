<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card>
        <card-image :src="photo.src" :ratio="1"/>

        <v-dialog
          v-model="dialog"
          width="75%"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-fade-transition>
              <v-overlay
                z-index="0"
                v-if="hover"
                absolute
              >
                <v-btn
                  plain
                  v-bind="attrs"
                  v-on="on"
                  v-if="hover"
                >
                  Find Out More
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </template>
          
          <photo-card 
            v-bind="photo" 
            @close-dialog="dialog = false" 
          />

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

<style scoped>
body {
  overflow: hidden;
  height: 100vh;
}
</style>