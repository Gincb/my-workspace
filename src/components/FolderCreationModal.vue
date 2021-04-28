<template>
  <div :class="open ? 'is-active modal-wrapper opened-flex' : 'not-active modal-wrapper'" @click.self="onClose">
    <div class="modal">
      <div class="modal_flex-wrap">
        <h1>Create your folder here</h1>
        <h2>Add a new folder to group your projects.</h2>
        <form class="submit-form">
          <input type="text" placeholder="Folder name">
          <button class="submit-button">Create folder</button>
          <button class="cancel-button" v-on:click="onClose">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FolderCreationModal',
  props: ['open'],
  methods: {
    onClose () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .is-active {
    display: block;
    animation: fadeIn 0.2s ease-in;
  }

  .not-active {
    display: none;
  }

  .opened-flex {
    display: flex;
  }

  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.349);
    z-index: 2;
  }

  .modal {
    width: 80%;
    padding: 3em 1.5em;
    background-color: white;
    border-radius: 20px;
    box-shadow: 1px 2px 2px rgb(175, 175, 175);
    text-align: center;
    z-index: 3;
  }

  .submit-form, .modal_flex-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 1.3em;
    font-weight: 700;
  }

  h2 {
    font-size: 0.8em;
    font-weight: 500;
    color: #686868;
  }

  input {
    width: 70%;
    margin: 3em 0;
    padding: 0.8em 2em;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8em;
    font-weight: 600;
    border-radius: 20px;
    border: 1px solid #b5b6b9;
    transition: all 0.3s ease;
  }

  input::placeholder {
    color: #b5b6b9;
    font-weight: 500;
  }

  input:focus, input:active, input:hover {
    border-radius: 20px;
    border: 1px solid #377bdc;
    outline: none;
  }

  .submit-button {
    cursor: pointer;
    width: 60%;
    margin-bottom: 2em;
    padding: 0.8em 2em;
    background-color: #37be97;
    border: 1px solid transparent;
    border-radius: 15px;
    color: white;
    transition: all 0.3s ease;
  }

  .submit-button:hover {
    border: 1px solid #37be97;
    background-color: white;
    color: #37be97;
  }

  .cancel-button {
    border: none;
    color: #377bdc;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .red-text {
    color: red;
  }

  @media only screen and (min-width: 600px) {
    .modal {
      width: 80%;
    }

    .submit-button {
      width: 45%;
    }
  }

  @media only screen and (min-width: 768px) {
    .modal {
      width: 50%;
    }

    .submit-button {
      width: 35%;
    }
  }

  @media only screen and (min-width: 992px) {
    .modal {
      width: 40%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .modal {
      width: 25%;
    }

    .submit-button {
      width: 45%;
    }
  }

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
</style>
