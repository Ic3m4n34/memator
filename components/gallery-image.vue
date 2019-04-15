<template>
  <div class="gallery-image">
    <img
      @click="showModal"
      :src="imageSrc"
      :alt="image.altText"
      class="gallery-image__image"
    />
    <div
      @click="showModal"
      class="gallery-image__layer"
    >
      <div class="gallery-image__layer-content">
        <span class="text">{{ image.imageDescription }}</span>
        <div class="gallery-image__underline" />
      </div>
    </div>
    <Modal
      :name="`imageModal-${image._id}`"
      :height="'auto'"
      :width="modalWidth"
      class="gallery-image__modal"
    >
      <img
        @click="showModal"
        :src="imageSrc"
        :alt="image.altText"
        class="gallery-image__modal-image"
      />
      <div class="gallery-image__layer-content">
        <span class="text">{{ image.imageDescription }}</span>
        <div class="gallery-image__underline" />
      </div>
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
  mounted() {
    console.log(this.image);
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
@import 'assets/scss/base';

  .gallery-image {
    position: relative;

    &:hover > .gallery-image__layer {
      display: block;
    }
    &__close-icon {
      position: absolute;
      top: 15px;
      right: 15px;
      height: 32px;
      width: 32px;
    }

    &__image {
      position: relative;
      display: block;
    }

    &__layer {
      display: none;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0 ,0, 0.75);

      &-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        color: #ffffff;
        padding: 36px;
      }
    }

    &__modal {
      .gallery-image__layer-content {
        background: rgba(0, 0 ,0, 0.75);
        position: absolute;
        bottom: 0;
        width: 100%;
        height: auto;
      }
    }


    &__modal-image {
      width: 100%;
      display: block;
      position: relative;
    }

    &__underline {
      width: 50%;
      height: 3px;
      background: $color-primary;
      margin-top: 12px;
    }
  }

</style>
