<template>
  <main class="my-workspace" v-if="$store.state.status == 'success'">
    <section class="folder-wrapper">
      <div class="folder-list">
        <folder-list v-for="folder in $store.state.folders" :key="'folder' + folder.id" :id="folder.id" :folder="folder"/>
      </div>
    </section>
    <section class="project-wrapper">
    <div class="project-list">
      <project-list v-for="project in $store.state.singleProjects" :key="'project' + project.id" :project="project"/>
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
