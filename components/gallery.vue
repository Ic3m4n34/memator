<template>
  <div class="gallery">
    <HeadingWithPaw :headline="'Galerie'" />
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
  },
  components: {
    HeadingWithPaw: () => import('@/components/heading-with-paw'),
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
              }
            }
          }
          `,
        },
      });
      const { galleries } = data;
      const imageGallery = galleries.filter(gallery => gallery._id === this.galleryId)[0]; // eslint-disable-line no-underscore-dangle
      return imageGallery;
    },
  },
};
</script>

<style lang="scss" scoped>

.gallery {

}

</style>
