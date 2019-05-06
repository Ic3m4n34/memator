<template>
  <div class="gallery">
    <div
      v-if="galleryHeadline"
      class="gallery__headline"
    >
      <HeadingWithPaw :headline="galleryHeadline" />
    </div>
    <div class="gallery__images">
      <GalleryImage
        v-for="(image, index) in galleryImages"
        :key="image._id"
        :image="image"
        :class="imageSize(index)"
      />
    </div>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main';


const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
  name: 'Gallery',
  props: {
    galleryId: {
      type: String,
      required: true,
    },
    galleryHeadline: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      galleryImages: null,
    };
  },
  components: {
    GalleryImage: () => import('@/components/gallery-image'),
    HeadingWithPaw: () => import('@/components/heading-with-paw'),
  },
  methods: {
    imageSize(index) {
      if ((index + 1) % 3 === 0) return 'gallery__image--big';
      return 'gallery__image--small';
    },
  },
  asyncComputed: {
    async imageGallery() {
      const { data } = await strapi.request('post', '/graphql', {
        data: {
          query: `query {
            galleries {
              _id
              galleryName
              galleryimages {
                image {
                  url
                }
                imageDescription
                altText
                _id
              }
            }
          }
          `,
        },
      });
      const { galleries } = data;
      const imageGallery = galleries.filter(gallery => gallery._id === this.galleryId)[0]; // eslint-disable-line no-underscore-dangle
      this.galleryImages = imageGallery.galleryimages;
      return imageGallery;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.gallery {
  display: flex;
  flex-direction: column;

  &__images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    justify-items: stretch;
    align-items: stretch;
    margin-top: 48px;

    @include mq($mq-medium) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
  }
}

</style>
