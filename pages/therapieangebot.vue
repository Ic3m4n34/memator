<template>
  <div class="therapieangebot">
    <HeaderImageWithBreadcrumb :headline="'Therapieangebot'" />
    <section class="section">
      <div class="container">
        <HeadingWithPaw :headline="'Meine Therapieangebote'" />
        <TherapyOfferList />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Therapieangebot',
  components: {
    HeaderImageWithBreadcrumb: () => import('@/components/header-image-with-breadcrumb'),
    HeadingWithPaw: () => import('@/components/heading-with-paw'),
    TherapyOfferList: () => import('@/components/therapy-offers-list'),
  },
};
</script>

<style lang="scss" scoped>

.therapieangebot {
  .container {
    flex-direction: column;
  }
}

</style>
