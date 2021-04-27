<template>
  <div id="app">
    <my-workspace/>
  </div>
</template>

<script>
import MyWorkspace from './components/MyWorkspace.vue'

export default {
  name: 'App',
  components: {
    MyWorkspace
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
