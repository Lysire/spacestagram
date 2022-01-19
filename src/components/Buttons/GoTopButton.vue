<template>
  <v-fab-transition>
    <v-btn
      v-show="visible"
      v-scroll="onScroll"
      @click="goBackTop"
      color="black lighten-3"
      fixed
      fab
      dark
      bottom
      right
    >
      <v-icon>mdi-arrow-up-bold</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
let debounce = require('lodash.debounce')

export default {
  data: () => ({
    visible: false,
  }),

  methods: {
    onScroll: debounce(function (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.visible = top > 30
    }, 500),
    
    goBackTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
