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
          <div class="blog-article-teaser__date-container">
            <span class="blog-article-teaser__date--day">
              {{ date.day }}
            </span>
            <span class="blog-article-teaser__date--day">
              {{ date.monthShort }}
            </span>
          </div>
        </div>
        <div class="blog-article-teaser__headline">
          <h4 class="h4">
            {{ teaserData.headline }}
          </h4>
        </div>
      </div>
      <div class="blog-article-teaser__description-container">
        <p
          v-html="teaserData.description"
          class="blog-article-teaser__description"
        />
      </div>
      <div class="blog-article-teaser__read-more">
        <nuxt-link
          :to="articlePath"
          class="blog-article-teaser__link"
        >
          Weiterlesen
        </nuxt-link>
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
    articlePath() {
      return this.teaserData.headline.toLowerCase().replace(/ /g, '-');
    },
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
      const monthShort = month.substring(0, 3);

      const year = date.getFullYear();
      return {
        day,
        month,
        monthShort,
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
@import 'assets/scss/base';

.blog-article-teaser {
  box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 60px;

  @include mq($mq-medium) {
    margin-bottom: 0;
  }

  &__content {
    padding: 12px 24px 24px 24px;
  }

  &__date {
    background: $color-primary;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    @include font-size(14px, 16px);
    font-weight: 600;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    margin-right: 24px;

    &-container {
      display: flex;
      flex-direction: column;
    }
  }

  &__description {
    text-align: left;
    height: 140px;
    @include mq($mq-large) {
      height: 110px;
    }
    &-container {
      padding: 24px 0;
    }
  }

  &__headline {
    .h4 {
      color: $color-headline;
      font-weight: 500;
      @include font-size(18px, 20px);
    }
    &-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  &__image {
    height: 250px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__link {
    color: $color-primary;
  }

  &__read-more {
    text-align: left;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 500;
  }
}

</style>
