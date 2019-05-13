<template>
  <div class="layout-default">
    <nuxt />
  </div>
</template>

<script>
import Layout from '@/mixins/layout';

export default {
  name: 'LayoutDefault',
  components: {
  },
  mixins: [Layout],
};
</script>

<style lang="scss">

.layout-default {
}

</style>

