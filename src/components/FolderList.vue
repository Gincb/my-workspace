<template>
  <div>
      <folder-icon class="folder-icon" :color="'#377bdc'"/>
      <h1>{{ title }}</h1>
      <h2>{{ projects }} Projects</h2>
      <h2>
      Created on
      {{
          getMonthName(new Date(time)) +
          " " +
          new Date(time).getDate() +
          ", " +
          new Date(time).getFullYear()
      }}
      </h2>
  </div>
</template>

<script>
import FolderIcon from './../assets/FolderIcon'

export default {
  name: 'FolderList',
  props: [ 'id', 'title', 'projects', 'time'],
  components: {FolderIcon},
  methods: {
    getMonthName (date) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      return months[date.getMonth()]
    },
    checkTimeDifference (date) {
      const todaysTime = new Date()
      const folderCreationDate = new Date(date)
      let timeDifference = (todaysTime.getTime() - folderCreationDate.getTime()) / 1000
      timeDifference /= 60

      if (timeDifference <= 1) {
        this.newFolder = true // highlight new created folder
      }
    }
  },
  created () {
    this.checkTimeDifference(this.time)
  }
}
</script>

<style scoped>
  a {
      text-decoration: none;
  }

  .folder {
    width: 100%;
    margin: 1em;
    padding: 1em;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s ease;
    animation: fadeIn 0.2s ease-in;
  }

  .folder:hover {
      box-shadow: 1px 5px 10px rgb(207, 207, 207);
  }

  h1 {
    margin: 0.5em 0;
    font-size: 1.2em;
    color: #2e2e2e;
    font-weight: 600;
  }

  h2 {
    margin: 0;
    font-size: 0.7em;
    color: #7e7e7e;
    font-weight: 500;
  }

  .folder-icon {
    width: 3em;
    height: 3em;
  }

  .new {
    background-color: #e2f6ed;
  }

  @media only screen and (min-width: 600px) {
      .folder {
          width: 37%;
      }
  }

  @media only screen and (min-width: 768px) {
      .folder {
          width: 24%;
      }
  }

  @media only screen and (min-width: 992px) {
      .folder {
          width: 25%;
      }
  }

  @media only screen and (min-width: 1200px) {
      .folder {
          width: 14%;
      }
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
</style>
