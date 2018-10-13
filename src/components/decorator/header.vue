<template>
  <header>
    <img class="header-logo" src="../../assets/img/zr-logo.png" />
    <nav>
      <template v-for="link in links">
        <router-link :to="link.primary.link_url">{{link.primary.link_label}}</router-link>
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
      'links'
    ]
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: gray;
  }

  a {
    display: inline-block;
    margin: 0 10px;
    color: white;
  }
</style>
