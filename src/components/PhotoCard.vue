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
      <template v-if="isLiked">
        <v-btn
          color="red lighten-1"
          dark
          @click="isLiked = !isLiked; addLiked(getCorrObject)"
        > 
          Liked 
        </v-btn>
      </template>

      <template v-else>
        <v-btn
          color="red lighten-1"
          outlined
          @click="isLiked = !isLiked; removeLiked(getCorrObject)"
        >
          Like
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
  export default {
    name: 'PhotoCard',

    props: {
      title: {type: String, default: "Placeholder Title"},
      date: {type: String, default: "Placeholder Date"},
      desc: {type: String, default: "Placeholder Description"},
      src: {type: String, default: "https://via.placeholder.com/1024"}
    },

    computed: {
      getCorrObject() {
        return { title: this.title, date: this.date, desc: this.desc, src: this.src }
      }
    },

    methods: {
      addLiked(photo) {
        this.$store.dispatch('liked/addLiked', photo)
      },

      removeLiked(photo) {
        this.$store.dispatch('liked/removeLiked', photo)
      }
    },

    data: () => ({
      isExpand: false,
      isLiked: false,
    }),
  }
</script>