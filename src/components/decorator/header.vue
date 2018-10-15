<template>
  <header class="header" :class="{'fixed': fixed}">
    <img class="header-logo" src="../../assets/img/zr-logo.png" />
    <nav>
      <template v-for="link in links">
        <prismic-link :field="link.primary.link">
          {{link.primary.link_label}}
        </prismic-link>
      </template>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "AppHeader",
    data() {
      return {
        title: "header"
      }
    },
    props: [
      'links',
      'fixed'
    ]
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: gray;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.3);
  }

  header.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  img {
    height: 50px;
  }

  a {
    display: inline-block;
    margin: 0 10px;
    color: white;
  }
</style>
