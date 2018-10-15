<template>
  <footer class="footer">
    <nav>
      <template v-for="link in links">
        <prismic-link :field="link.primary.link">
          {{link.primary.link_label}}
        </prismic-link>
      </template>
    </nav>
  </footer>
</template>

<script>
  export default {
    name: "AppFooter",
    data() {
      return {
        title: "footer"
      }
    },
    props: [
      'links'
    ]
  }
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: gray;
    color: #fff;
    padding: 60px 20px;
  }

  a {
    display: inline-block;
    margin: 0 10px;
    color: white;
  }
</style>
