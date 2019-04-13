<template>
  <div class="gallery-image">
    <img
      :src="imageSrc"
      :alt="image.altText"
    />
  </div>
</template>

<script>
const apiUrl = process.env.API_URL || 'http://localhost:1337';

export default {
  name: 'GalleryImage',
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return `${apiUrl}/${this.image.image.url}`;
    },
  },
  mounted() {
    console.log(this.image);
  },
};
</script>

<style lang="scss" scoped>

</style>
