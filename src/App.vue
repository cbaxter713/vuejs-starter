<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
  import AppHeader from './components/header.vue'

  export default {
    name: 'App',
    components: {
      AppHeader
    }
  }
</script>

<style>
  @import "./assets/css/resetr.css";
  @import "./assets/css/prismic-edit-button.css";

  main {
    width: 100%;
    font-family: Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
