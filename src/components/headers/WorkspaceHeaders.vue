<template>
  <div class="workspace-header">
    <h1>{{title}}</h1>
    <button class="view-button" v-on:click='toggleView(), toggleButtonContent()'>{{button.text}}</button>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceHeaders',
  props: ['toggleView', 'title'],
  data () {
    return {
      button: {
        text: 'View All'
      },
      seen: true
    }
  },
  methods: {
    toggleButtonContent () {
      this.seen = !this.seen
      this.button.text = this.seen ? 'View All' : 'Show Less' // toggle button text
    }
  }
}
</script>

<style scoped>
  .workspace-header {
    display: flex;
    padding: 1em 1.5em 1em 1em;
    justify-content: space-between;
  }

  h1{
    margin: 0;
    font-weight: 500;
    font-size: 1.5em;
    line-height: 1;
  }

  .view-button {
    border: none;
    color: #377bdc;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }
</style>
