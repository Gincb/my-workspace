<template>
  <div class="project">
    <div class="project-title">
      <h1>{{ project.attributes.name }}</h1>
      <span>{{ project.attributes.identifier }}</span>
    </div>
    <div class="project-content">
      <div class="project-content_date">
        <div class="project-content_creation-date">
          <h2>date of order</h2>
          <h3>{{creationTimeDifference.msg}}</h3>
        </div>
        <div class="project-content_update-date">
          <h2>last updated</h2>
          <h3>{{updateTimeDifference.msg}}</h3>
        </div>
      </div>
      <div class="project-content_price">
        <h2>price</h2>
        <h3>{{ project.attributes.price.amount_euro }}€</h3>
      </div>
      <div class="project-content_lang">
        <div class="project-content_source-lang">
          <h2>from:</h2>
          <h3>{{ project.attributes.source_language }}</h3>
        </div>
        <div class="project-content_target-lang">
          <h2>to:</h2>
          <div class="target-lang">
            <h3 v-for="language of project.attributes.target_languages" v-bind:key="language + Math.random()">{{language}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="project-status">
      <div v-if="project.attributes.status == 'COMPLETED'" class="completed-status">
        <h1>{{project.attributes.workflow.substring(0, 1).toUpperCase() + project.attributes.workflow.substring(1, project.attributes.workflow.length) + ' is ready!'}}</h1>
      </div>
      <div v-else class="uncompleted-status">
        <div class="progress-bar_wrapper">
          <h1>{{project.attributes.progress.percent * 100 + '% done'}}</h1>
          <div class="progress-bar" :style="{width: project.attributes.progress.percent * 100 + '%'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  props: ['project'],
  data () {
    return {
      creationTimeDifference: {msg: ''},
      updateTimeDifference: {msg: ''}
    }
  },
  methods: {
    getMonthName (date) {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      return months[date.getMonth()]
    },
    getTime (difference, projectDate) {
      const projectCreationTime = new Date(projectDate)
      const specificTime = projectDate.match(/\d\d:\d\d/)
      let time = this.getMonthName(projectCreationTime) + ' ' + projectCreationTime.getDate() + ', ' + projectCreationTime.getFullYear() + ' - ' + specificTime[0]
      difference.msg = time
    }
  },
  created () {
    this.getTime(this.updateTimeDifference, this.project.attributes.updated_at)
    this.getTime(this.creationTimeDifference, this.project.attributes.created_at)
  }
}
</script>

<style scoped>
  .project {
    width: 100%;
    margin: 1em;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s ease;
    animation: fadeIn 0.2s ease-in;
  }

  .project:hover {
      box-shadow: 1px 5px 10px #cfcfcf;
  }

  .project-content > div, .project-content_date > div {
    margin: 1em 0;
  }

  .project-title > h1 {
    margin-bottom: 0.7em;
    line-height: 1.2em;
    height: calc(1.2em * 2);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .project-title > span {
      color: #377bdc;
  }

  .project-title, .project-content {
    min-height: 5em;
    padding: 1em 1em 1em;
    border-bottom: 1px solid #f8f9fd;
  }

  h1 {
    margin: 0;
    font-size: 1.2em;
    color: #2e2e2e;
    font-weight: 600;
  }

  h2 {
    font-variant: small-caps;
    margin: 0;
    font-size: 1em;
    color: #7e7e7e;
    font-weight: 500;
  }

  h3 {
    margin: 0;
    font-size: 0.9em;
    font-weight: 600;
  }

  span {
    font-size: 0.8em;
  }

  .project-content_lang {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .project-content_target-lang, .project-content_source-lang {
    width: 50%;
  }

  .project-content_target-lang > .target-lang > h3, .project-content_source-lang > h3 {
    font-size: 1.2em;
    font-variant: small-caps;
  }

  .target-lang {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .target-lang > h3:not(:last-child)::after {
    content: ', ';
    white-space: pre;
  }

  .completed-status, .uncompleted-status {
    height: 1.5em;
    padding: 1.5em;
  }

  .completed-status {
    text-align: center;
    background-color: #e2f6ed;
  }

  .completed-status > h1 {
    color: #37be97;
    font-size: 0.9em;
    font-weight: 500;
  }

  .progress-bar_wrapper {
    position: relative;
    width: 100%;
    height: 1em;
    background-color: #f3f3f3;
    border-radius: 10px;
  }

  .progress-bar {
    height: 100%;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #37be97;
  }

  .progress-bar_wrapper > h1 {
    position: absolute;
    width: 100%;
    margin: auto;
    text-align: center;
    font-size: 0.7em;
    font-weight: 600;
    color: black;
  }

  @media only screen and (min-width: 600px) {
      .project {
          width: 44%;
      }
  }

  @media only screen and (min-width: 768px) {
      .project {
          width: 28%;
      }
  }

  @media only screen and (min-width: 992px) {
      .project {
          width: 25%;
      }
  }

  @media only screen and (min-width: 1200px) {
      .project {
          width: 20%;
      }
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
</style>
