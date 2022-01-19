<template>
  <v-btn
    icon
    @click="onClick"
  >
    <v-icon> mdi-home </v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('back-home')
    }
  }
}
</script>
