<template>
  <v-card
    class="mx-auto"
    elevation="10"
  >
    <card-image :src="src" />

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ date }}
    </v-card-subtitle>

    <v-card-actions>
      <template v-if="!isLiked(getDateIdObj)">
        <v-btn
          color="red lighten-1"
          outlined
          @click="addLiked(getDateIdObj)"
        > 
          Like 
        </v-btn>
      </template>

      <template v-else>
        <v-btn
          color="red lighten-1"
          dark
          @click="removeLiked(getDateIdObj)"
        >
          Liked
        </v-btn>
      </template>

      <v-btn
        icon
        color="white"
        top
        right
        absolute
        @click="$emit('close-dialog')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <expand-button @expand-text="expandListener" />

    </v-card-actions>

    <v-expand-transition>
      <div v-show="isExpand" id="get-desc-text">
        <v-divider></v-divider>

        <v-card-text class="justify">
          {{ desc }}
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>
</template>

<script>
import CardImage from './Image/CardImage'
import ExpandButton from './Buttons/ExpandButton'

import { mapGetters } from 'vuex';

export default {
  name: 'PhotoCard',

  components: {
    CardImage,
    ExpandButton
  },

  props: {
    title: {type: String, default: "Placeholder Title"},
    date: {type: String, default: "Placeholder Date"},
    desc: {type: String, default: "Placeholder Description"},
    src: {type: String, default: "https://via.placeholder.com/1024"}
  },

  computed: {
    getDateIdObj() {
      return { dateId: this.date }
    },
    ...mapGetters('liked', {
      isLiked: 'getIsLiked'
    }),
  },

  data: () => ({
    isExpand: false,
  }),

  methods: {
    expandListener() {
      this.isExpand = !this.isExpand
    },

    addLiked(dateIdObj) {
      this.$store.dispatch('liked/addLiked', dateIdObj)
    },

    removeLiked(dateIdObj) {
      this.$store.dispatch('liked/removeLiked', dateIdObj)
    }
  },
}
</script>