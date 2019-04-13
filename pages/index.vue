<template>
  <div class="section-wrapper">
    <StageImage
      :img="'images/home/home-stage.jpg'"
      :alt="'Frau mit Hund - Tierphysiotherapie Meyer'"
    >
      <template v-slot:headline>
        Tierphysiotherapie Meyer
      </template>
      <template v-slot:stageDescription>
        <p class="text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </template>
    </StageImage>
    <section class="section">
      <div class="container">
        <AboutShowcase />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <Gallery :gallery-id="'5cb1ea542a2c4c0c3612e481'" />
      </div>
    </section>
  </div>
</template>

<script>
import PageMixin from '@/mixins/page';

export default {
  components: {
    AboutShowcase: () => import('@/components/about-showcase'),
    Gallery: () => import('@/components/gallery'),
    StageImage: () => import('@/components/stage-image'),
  },
  mixins: [PageMixin],
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
