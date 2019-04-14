<template>
  <div class="layout-default">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Layout from '@/mixins/layout';

export default {
  name: 'LayoutDefault',
  components: {
    Header: () => import('@/components/the-header'),
  },
  mixins: [Layout],
};
</script>
