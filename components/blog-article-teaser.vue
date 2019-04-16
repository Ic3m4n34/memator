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
      const monthConstructor = new Array(12);
      monthConstructor[0] = 'Januar';
      monthConstructor[1] = 'Februar';
      monthConstructor[2] = 'März';
      monthConstructor[3] = 'April';
      monthConstructor[4] = 'Mai';
      monthConstructor[5] = 'Juni';
      monthConstructor[6] = 'Juli';
      monthConstructor[7] = 'August';
      monthConstructor[8] = 'September';
      monthConstructor[9] = 'Oktober';
      monthConstructor[10] = 'November';
      monthConstructor[11] = 'Dezember';

      const month = monthConstructor[date.getUTCMonth()];

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
