<template>
  <div
    :class="textFlexPosition"
    class="text-image"
  >
    <div
      v-html="data.text"
      class="text-image__text"
    />
    <div class="text-image__image-container">
      <img
        :src="data.image.url"
        :alt="data.image.alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextImage',
  props: {
    data: {
      type: Object,
      required: true,
    },
    textPosition: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    textFlexPosition() {
      if (this.textPosition === 'left') return 'text-image--regular';
      return 'text-image--reversed';
    },
  },
};
</script>

<style lang="scss">
@import 'assets/scss/base';

.text-image {
  display: flex;
  align-items: center;

  > div {
    width: 100%;
    @include mq(800px) {
      width: 50%;
    }
  }

  &__text {
    padding: 24px;
    .text {
      margin-bottom: 12px;
    }
  }

  &--regular {
    flex-direction: column;
    @include mq(800px) {
      flex-direction: row;
    }
  }

  &--reversed {
    flex-direction: column-reverse;
    @include mq(800px) {
      flex-direction: row-reverse;
    }
  }
}

</style>
