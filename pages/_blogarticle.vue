<template>
  <div class="blogarticle">
    <section class="section">
      <div class="container">
        <h1 class="text h1">
          {{ headline }}
        </h1>
        <div class="blogarticle__image">
          <img
            :src="imagePath"
            :alt="imageAltText"
          />
        </div>
        <div
          v-html="blogContent"
          class="blogarticle__content"
        >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main';


const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
  name: 'BlogArticle',
  async asyncData({ params }) {
    const { data } = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
          blogarticles {
            _id
            headline
            publishDate
            blogImage {
              _id
              url
            }
            description
            blogContent
          }
        }
        `,
      },
    });
    const { blogarticles } = data;
    const article = blogarticles.filter((blogArticle) => {
      const articlePath = blogArticle.headline.toLowerCase().replace(/ /g, '-');
      if (articlePath === params.blogarticle) {
        return blogArticle;
      }
      return null;
    })[0];
    return article;
  },
  computed: {
    imageAltText() {
      return `${this.headline} - Blog Artikel - Tierphysiotherapie Meyer`;
    },
    imagePath() {
      return `${apiUrl}${this.blogImage.url}`;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
