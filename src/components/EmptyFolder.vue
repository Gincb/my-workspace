<template>
  <div class="empty-folder-wrapper">
    <folder-icon class="folder-icon" :color="'gray'"/>
    <h1>This section is currently empty</h1>
  </div>
</template>

<script>
import FolderIcon from './../assets/FolderIcon.vue'

export default {
  name: 'EmptyFolder',
  components: { FolderIcon }
}
</script>

<style scoped>
  .empty-folder-wrapper{
    margin-top: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .folder-icon {
    width: 4em;
    height: 4em;
  }

  .empty-folder-wrapper > h1 {
    cursor: default;
    margin: 0.5em;
    font-size: 1.2em;
    font-weight: 500;
    color: rgb(138, 138, 138);
    text-align: center;
  }
</style>
