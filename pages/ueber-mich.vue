<template>
  <div class="ueber-mich">
    <HeaderImageWIthBreadcrumb :headline="'Über mich'" />
  </div>
</template>

<script>
export default {
  name: 'UeberMich',
  components: {
    HeaderImageWIthBreadcrumb: () => import('@/components/header-image-with-breadcrumb'),
  },
};
</script>

<style lang="scss" scoped>

.ueber-mich {}

</style>
