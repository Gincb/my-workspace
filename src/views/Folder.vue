<template>
  <div class="projects-folder">
    <router-link class="title-router" :to="{name: 'MyWorkspace'}">My Workspace 🠒 </router-link><span class="title-router">{{this.$route.query.folderName}}</span>
    <empty-folder v-if="folderProjects.length === 0"/>
    <div v-else class="project-list">
      <project-list v-for="project in folderProjects" :key="'project' + project.id" :project="project"/>
    </div>
  </div>
</template>

<script>
import ProjectList from '../components/ProjectList.vue'
import EmptyFolder from '../components/EmptyFolder.vue'

export default {
  name: 'Folder',
  components: { ProjectList, EmptyFolder },
  computed: {
    folderProjects() {
      return this.$store.state.folderProjects
    }
  },
  mounted() {
    this.$store.dispatch("getToken").then(() => {
      this.$store.dispatch("getFolderProjects", this.$route.params.id)
    }).then(() => {
        this.$store.dispatch("success")
      })
  }
}
</script>

<style scoped>
  .projects-folder {
    padding: 2em;
  }

  .title-router{
    float: left;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.5em;
    line-height: 1;
    color: black;
    margin-bottom: 1em;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #377bdc;
  }

  span {
    cursor: default;
    margin-left: 0.5em;
  }

  .project-list{
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-content: center;
    align-items: stretch;
  }

  .project-list > div{
    min-height: 15em;
  }

  .no-projects-wrapper{
    width: 100%;
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .folder-icon {
    width: 4em;
    height: 4em;
  }

  .no-projects-wrapper > h1 {
    cursor: default;
    margin: 0.5em;
    font-size: 1.2em;
    font-weight: 500;
    color: rgb(138, 138, 138);
    text-align: center;
  }
</style>
