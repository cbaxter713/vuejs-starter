<template>
  <header>
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
