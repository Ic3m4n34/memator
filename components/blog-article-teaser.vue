<template>
  <div class="blog-article-teaser">
    <div class="blog-article-teaser__image">
      <img
        :src="imagePath"
        :alt="altText"
      />
    </div>
    <div class="blog-article-teaser__content">
      <div class="blog-article-teaser__headline-container">
        <div class="blog-article-teaser__date">
          <span class="blog-article-teaser__date--day">
            {{ date.day }}
          </span>
          <span class="blog-article-teaser__date--day">
            {{ date.month }}
          </span>
        </div>
        <div class="blog-article-teaser__headline">
          <h4 class="h4">
            {{ headline }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const apiUrl = process.env.API_URL || 'http://localhost:1337';

export default {
  name: 'BlogArticleTeaser',
  props: {
    teaserData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imagePath() {
      return `${apiUrl}${this.teaserData.blogImage.url}`;
    },
    altText() {
      return `${this.teaserData.headline} - Tierphysiotherapie Meyer`;
    },
    date() {
      const date = new Date(this.teaserData.publishDate);
      const day = date.getDate();
      const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
      const month = months[date.getUTCMonth()];

      const year = date.getFullYear();
      return {
        day,
        month,
        year,
      };
    },
  },
  mounted() {
    // console.log(this.headline);
  },
};
</script>

<style lang="scss" scoped>

.blog-article-teaser {}

</style>
