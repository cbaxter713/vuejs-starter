<template>
  <div class="container">
    <prismic-edit-button :documentId="documentId"/>
    <router-link to="/team" class="back-link">< Back</router-link>
    <div class="team-member-header">
      <h1 class="title">{{ $prismic.richTextAsPlain(fields.name) }}</h1>
      <h4 class="position">- {{ $prismic.richTextAsPlain(fields.position) }}</h4>
    </div>
    <section class="team-member-body">
      <prismic-image :field="fields.image"/>
      <p>{{ $prismic.richTextAsPlain(fields.profile) }}</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: "TeamMember",
    data () {
      return {
        documentId: '',
        fields: {
          name: null,
          image: null,
          position: null,
          profile: null
        }
      }
    },
    methods: {
      getContent (uid) {
        this.$prismic.client.getByUID('team_member', uid)
        .then((document) => {
          if (document) {
            console.log('document', document);
            this.documentId = document.id;
            this.fields.name = document.data.name;
            this.fields.image = document.data.image;
            this.fields.position = document.data.position;
            this.fields.profile = document.data.profile;
            // console.log('fields', this.fields);
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
      }
    },
    created () {
      this.getContent(this.$route.params.uid)
    },
    beforeRouteUpdate (to, from, next) {
      this.getContent(this.$route.params.uid)
      next()
    }
  }
</script>

<style scoped>
  .back-link {
    display: block;
    font-size: 20px;
  }

  .team-member-header {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  .position {
    margin-left: 20px;
  }

  .team-member-body {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 20px;
  }
</style>
