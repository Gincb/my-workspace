<template>
  <bounce-loader class="loader" v-if="$store.state.status == 'loading'" :color="'#377bdc'"/>
  <div v-else-if="$store.state.status == 'success'" id="app">
    <main-header/>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from './components/headers/MainHeader.vue'
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    BounceLoader
  },
  created() {
    this.$store.dispatch("loading").then(() => {
      this.$store.dispatch("getToken").then(() => {
        this.$store.dispatch("getFolders")
        this.$store.dispatch("getSingleProjects")
      }).then(() => {
        this.$store.dispatch("success")
      })
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f8f9fd;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html::-webkit-scrollbar {
  display: none;
}

.loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #f8f9fd;
}
</style>
