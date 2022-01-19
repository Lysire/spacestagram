<template>
  <v-btn
    icon
    @click="onClick"
  >
    <v-icon> {{ isExpand ? 'mdi-chevron-up' : 'mdi-chevron-down'}} </v-icon>
  </v-btn>
</template>

<script>
export default {
  data: () => ({
    isExpand: false
  }),

  methods: {
    onClick() {
      this.isExpand = !this.isExpand
      this.$emit('expand-text')
    }
  }
}
</script>
