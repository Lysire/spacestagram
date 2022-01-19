<template>
  <v-btn
    icon
    @click="onClick"
  >
    <v-icon color="red lighten-1"> mdi-heart </v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('toggle-favs')
    }
  }
}
</script>
