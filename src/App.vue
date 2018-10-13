<template>
  <div id="app">
    <app-header :links="headerLinks"></app-header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <app-footer :links="footerLinks"></app-footer>
  </div>
</template>

<script>
  import AppHeader from './components/decorator/header.vue';
  import AppFooter from './components/decorator/footer.vue';

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter
    },
    data() {
      return {
        headerLinks: [],
        footerLinks: []
      }
    },
    methods: {
      getHeaderContent () {
        this.$prismic.client.getByUID('nav_menu', 'main-nav')
        .then((document) => {
          if (document) {
            console.log('headerData, ', document.data.nav);
            this.headerLinks = document.data.nav;
          }
        })
      },
      getFooterContent () {
        this.$prismic.client.getByUID('nav_menu', 'footer-nav')
        .then((document) => {
          if (document) {
            this.footerLinks = document.data.nav;
          }
        })
      }
    },
    created () {
      this.getHeaderContent();
      this.getFooterContent();
    },
    beforeRouteUpdate (to, from, next) {
      this.getHeaderContent();
      this.getFooterContent();
      next()
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
