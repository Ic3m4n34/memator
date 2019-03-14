<template>
  <div class="layout-default">
    <Header />
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {
    Header: () => import('@/components/the-header'),
  },
};
</script>
