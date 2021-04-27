<template>
  <div id="app">
    <h1>Hello</h1>
  </div>
</template>

<script>

export default {
  name: 'MyWorkspace',
  components: {
  },
  computed: {
    token() {
      return this.$store.state.token
    }
  },
  mounted() {
    this.$store.dispatch("getToken");
  }
}
</script>

<style>
</style>
