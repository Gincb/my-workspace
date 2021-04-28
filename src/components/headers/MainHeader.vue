<template>
  <div class="header">
    <folder-creation-modal :open="modalOpen" @close="closeModal" />
    <router-link class="title-router" :to="{name: 'MyWorkspace'}"><h1 class="header-title">my workspace</h1></router-link>
    <button v-on:click="openModal()" :class="hidden ? 'create-button hidden' : 'create-button'">+ Create new folder</button>
  </div>
</template>

<script>
import FolderCreationModal from '../FolderCreationModal.vue'

export default {
  name: 'MainHeader',
  components: {FolderCreationModal},
  props: ['create'],
  data () {
    return {
      modalOpen: {},
      hidden: ''
    }
  },
  methods: {
    openModal () {
      this.modalOpen = true
      document.querySelector('#app').style.overflow = 'hidden' // prevent scroll on open modal
    },

    closeModal () {
      this.modalOpen = false
      document.querySelector('#app').style.overflow = 'visible'
    },

    checkRoute () {
      if (this.$router.currentRoute.name === 'MyWorkspace') {
        this.hidden = false // show button on main screen
      }
    }
  },
  created () {
    this.modalOpen = false
    this.routeWatch = this.$router.currentRoute.name
    this.checkRoute()
  },
  watch: {
    $route (to) {
      to.name !== 'MyWorkspace' ? this.hidden = true : this.hidden = false
    }
  }
}
</script>

<style scoped>
  .header {
    padding: 1em 2.5em;
    background-color: white;
    box-shadow: 1px 1px 5px rgb(207, 207, 207);
  }

  .header-title, a {
    text-decoration: none;
    margin: 0 0 0.5em 0;
    padding: 0;
    font-variant: small-caps;
    font-size: 1.5em;
    color: #377bdc;
  }

  .create-button {
    cursor: pointer;
    background-color: #377bdc;
    border: 1px solid transparent;
    border-radius: 15px;
    color: white;
    padding: 0.8em 2em;
    transition: all 0.3s ease;
  }

  .create-button:hover {
    border: 1px solid #377bdc;
    background-color: white;
    color: #377bdc;
  }

  @media only screen and (min-width: 600px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .header-title, a {
    margin: 0;
  }

  .hidden {
    display: none;
  }
}
</style>
