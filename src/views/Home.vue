<!-- Create file src/views/TeamPage.vue -->

<template>
  <div class="wrapper">
    <prismic-edit-button :documentId="documentId"/>
    <hero-video v-if="fields.bannerType === 'video'"
                :title="$prismic.richTextAsPlain(fields.title)"
                :subtitle="$prismic.richTextAsPlain(fields.subtitle)"
                :videoUrl="fields.bannerVideo.url"
                :poster="fields.bannerDesktop.url">
    </hero-video>
    <hero-banner v-else
                 :title="$prismic.richTextAsPlain(fields.title)"
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
  import HeroVideo from '../components/hero-video.vue';
  import SliceLoader from '../components/slice-loader.vue';

  export default {
    name: 'HomePage',
    components: {
      HeroBanner,
      HeroVideo,
      SliceLoader
    },
    data () {
      return {
        documentId: '',
        fields: {
          title: null,
          subtitle: null,
          bannerType: null,
          bannerVideo: {
            url: null
          },
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

            console.log('home data: ', pageData);
            this.fields.title = pageData.title;
            this.fields.subtitle = pageData.subtitle;
            this.fields.bannerType = pageData.hero_banner_type;
            this.fields.bannerVideo = pageData.hero_video;
            this.fields.bannerDesktop = pageData.hero_banner;
            this.fields.bannerMobile = pageData.hero_banner.mobil;
            this.fields.slices = pageData.body;
            console.log('home fields, ', this.fields);
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
