<template>
  <header>
    <img class="header-logo" src="../assets/img/zr-logo.png" />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/team">Team</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        title: "header"
      }
    }
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
