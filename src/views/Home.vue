<!-- Create file src/views/TeamPage.vue -->

<template>
  <div class="wrapper">
    <prismic-edit-button :documentId="documentId"/>
    <hero-banner :title="$prismic.richTextAsPlain(fields.title)"
                 :subtitle="$prismic.richTextAsPlain(fields.subtitle)"
                 :desktopUrl="fields.bannerDesktop.url"
                 :mobileUrl="fields.bannerMobile.url"
                 :imageAlt="fields.bannerMobile.alt">
    </hero-banner>
    <slice-loader :slices="fields.slices"></slice-loader>
  </div>
</template>

<script>
  import HeroBanner from '../components/hero-banner.vue';
  import SliceLoader from '../components/slice-loader.vue';

  export default {
    name: 'HomePage',
    components: {
      HeroBanner,
      SliceLoader
    },
    data () {
      return {
        documentId: '',
        fields: {
          title: null,
          subtitle: null,
          bannerDesktop: {
            url: null
          },
          bannerMobile: {
            url: null
          },
          slices: []
        }
      }
    },
    methods: {
      getContent () {
        //this.$prismic.client.query(this.$prismic.Predicates.at('document.type', 'team-page'))
        this.$prismic.client.getSingle('home_page')
        .then((document) => {
          if (document) {
            const pageData = document.data;
            this.documentId = document.id;
            this.fields.title = pageData.title;
            this.fields.subtitle = pageData.subtitle;
            this.fields.bannerDesktop = pageData.hero_banner;
            this.fields.bannerMobile = pageData.hero_banner.mobil;
            this.fields.slices = pageData.body;

            console.log('fields, ', this.fields);
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
