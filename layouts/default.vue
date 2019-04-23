<template>
  <div class="layout-default">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Layout from '@/mixins/layout';

export default {
  name: 'LayoutDefault',
  components: {
    Footer: () => import('@/components/footer'),
    Header: () => import('@/components/the-header'),
  },
  mixins: [Layout],
};
</script>

<style lang="scss">

.layout-default {
  .section,
  .container {
    min-height: auto;
  }
}

</style>

