<template>
  <div class="gallery-image">
    <img
      @click="showModal"
      :src="imageSrc"
      :alt="image.altText"
    />
    <Modal
      :name="`imageModal-${image._id}`"
      :height="'auto'"
      :width="modalWidth"
    >
      <img
        @click="showModal"
        :src="imageSrc"
        :alt="image.altText"
        class="gallery-image__modal-image"
      />
      <span
        @click="hideModal"
        class="gallery-image__close-icon"
      >
        <img
          :src="closeIcon"
          alt="Close Modal"
        />
      </span>
    </Modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import closeIcon from '@/assets/images/close-icon.png';

const apiUrl = process.env.API_URL || 'http://localhost:1337';

export default {
  name: 'GalleryImage',
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      closeIcon,
    };
  },
  computed: {
    ...mapGetters({
      isMobileScreen: 'viewport/isMobileScreen',
    }),
    imageSrc() {
      return `${apiUrl}${this.image.image.url}`;
    },
    modalWidth() {
      return this.isMobileScreen ? '100%' : '600';
    },
  },
  methods: {
    showModal() {
      this.$modal.show(`imageModal-${this.image._id}`); // eslint-disable-line no-underscore-dangle
    },
    hideModal() {
      this.$modal.hide(`imageModal-${this.image._id}`); // eslint-disable-line no-underscore-dangle
    },
  },
};
</script>

<style lang="scss" scoped>

  .gallery-image {
    &__close-icon {
      position: absolute;
      top: 15px;
      right: 15px;
      height: 32px;
      width: 32px;
    }

    &__modal-image {
      width: 100%;
      display: block;
    }
  }

</style>
