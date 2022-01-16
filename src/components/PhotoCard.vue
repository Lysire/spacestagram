<template>
  <v-card
    class="mx-auto"
    elevation="10"
  >
    <v-img
      :src="src"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="black lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

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

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="isExpand = !isExpand"
      >
        <v-icon> {{ isExpand ? 'mdi-chevron-up' : 'mdi-chevron-down'}} </v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="isExpand">
        <v-divider></v-divider>

        <v-card-text>
          {{ desc }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    name: 'PhotoCard',

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

    methods: {
      addLiked(dateIdObj) {
        this.$store.dispatch('liked/addLiked', dateIdObj)
      },

      removeLiked(dateIdObj) {
        this.$store.dispatch('liked/removeLiked', dateIdObj)
      }
    },

    data: () => ({
      isExpand: false,
    }),
  }
</script>