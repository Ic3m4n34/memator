<template>
  <div class="blog-article-teasers">
    <div class="blog-article-teasers__headline">
      <HeadingWithPaw :headline="'Blog'" />
    </div>
    <div class="blog-article-teasers__teasers">
      <BlogArticleTeaser
        v-for="teaser in latestBlogArticles"
        :key="teaser._id"
        :teaser-data="teaser"
        class="blog-article-teasers__teaser"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogArticleTeasers',
  components: {
    BlogArticleTeaser: () => import('@/components/blog-article-teaser'),
    HeadingWithPaw: () => import('@/components/heading-with-paw'),
  },
  props: {
    teasers: {
      type: Array,
      required: true,
    },
  },
  computed: {
    latestBlogArticles() {
      const { teasers } = this;
      const teasersSortedByDate = teasers.sort(this.sortByDate);
      return teasersSortedByDate.slice(-3).reverse();
    },
  },
  methods: {
    sortByDate(a, b) {
      return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.blog-article-teasers {
  width: 100%;
  &__teaser {
    width: 100%;
    @include mq($mq-medium) {
      width: 30%;
    }
  }

  &__teasers {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include mq($mq-medium) {
      flex-direction: row;
    }
  }
}

</style>
