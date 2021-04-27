<template>
  <main class="my-workspace" v-if="$store.state.status == 'success'">
    <section class="folder-wrapper">
      <div class="folder-list">
        <folder-list v-for="folder in folders" :key="'folder' + folder.id" :id="folder.id" :title="folder.name" :projects="folder.attributes.total_projects" :time="folder.attributes.created_at"/>
      </div>
    </section>
    <section class="project-wrapper">
    <div class="project-list">
      <project-list v-for="project in singleProjects" :key="'project' + project.id" :name="project.attributes.name" :identifier="project.attributes.identifier" :price="project.attributes.price.amount_euro" :sourceLanguage="project.attributes.source_language" :targetLanguages="project.attributes.target_languages" :status="project.attributes.status" :workflow="project.attributes.workflow" :progress="project.attributes.progress.percent" :createdAt="project.attributes.created_at" :updatedAt="project.attributes.updated_at"/>
    </div>
  </section>
  </main>
</template>

<script>
import FolderList from '../components/FolderList.vue';
import ProjectList from '../components/ProjectList.vue';

export default {
  name: 'MyWorkspace',
  components: {
    FolderList,
    ProjectList
  },
  computed: {
    folders() {
      return this.$store.state.folders
    },
    singleProjects() {
      console.log(this.$store.state.singleProjects)
      return this.$store.state.singleProjects
    }
  },
  created() {
    this.$store.dispatch("getToken").then(() => {
      this.$store.dispatch("getFolders")
      this.$store.dispatch("getSingleProjects")
    })
  }
}
</script>

<style>
  .my-workspace {
    padding: 2em 3.5em;
  }

  .folder-list, .project-list{
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-content: center;
    align-items: center;
  }

  .project-list > div{
    min-height: 15em;
  }
</style>
