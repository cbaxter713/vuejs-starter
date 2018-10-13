<!-- Create file src/views/TeamPage.vue -->

<template>
  <div class="container">
    <prismic-edit-button :documentId="documentId"/>
    <h1 class="title">
      {{ $prismic.richTextAsPlain(fields.title) }}
    </h1>
    <section class="team-member-grid">
      <router-link v-for="member in fields.teamMembers" :to="`/team/${member.slug}`" class="team-member">
        <prismic-image :field="member.image"/>
        <h3>{{ $prismic.richTextAsPlain(member.name) }}</h3>
        <p>{{ $prismic.richTextAsPlain(member.position) }}</p>
      </router-link>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'TeamPage',
    data () {
      return {
        documentId: '',
        fields: {
          title: null,
          teamMembers: []
        }
      }
    },
    methods: {
      getContent () {
        //this.$prismic.client.query(this.$prismic.Predicates.at('document.type', 'team-page'))
        this.$prismic.client.getSingle('team_page',
          {fetchLinks: ['team_member.name', 'team_member.image', 'team_member.position']})
        .then((document) => {
          if (document) {
            console.log('document', document);
            this.documentId = document.id;
            this.fields.title = document.data.title;
            this.fields.teamMembers = document.data.team_members.map((teamMember) => {
              return {
                name: teamMember.team_member_list.data.name,
                position: teamMember.team_member_list.data.position,
                image: teamMember.team_member_list.data.image,
                slug: teamMember.team_member_list.slug
              }
            });
            console.log('fields', this.fields);
          } else {
            this.$router.push({ name: 'not-found' })
          }
        })
      }
    },
    created () {
      this.getContent()
    },
    beforeRouteUpdate (to, from, next) {
      this.getContent()
      next()
    }
  }
</script>

<style>
  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 10px;
  }

  .title {
    font-size: 32px;
  }

  .team-member-grid {
    display: grid;
    margin: 30px 0;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
  }

  .team-member h3 {
    text-transform: uppercase;
    font-size: 24px;
  }

  .team-member img {
    max-width: 100%;
  }
</style>
