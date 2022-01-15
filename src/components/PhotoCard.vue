<template>
  <v-card
    class="mx-auto"
  >
    <v-img
      :src="src"
    >
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
          @click="isLiked = !isLiked"
        > 
          Liked 
        </v-btn>
      </template>

      <template v-else>
        <v-btn
          color="red lighten-1"
          outlined
          @click="isLiked = !isLiked"
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

    data: () => ({
      isExpand: false,
      isLiked: false,
    }),
  }
</script>