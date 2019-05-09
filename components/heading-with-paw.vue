<template>
  <div class="heading-with-paw">
    <div class="heading-with-paw__image-container">
      <img
        :src="Paw"
        alt="Hundepfote - Tierphysiotherapie Meyer"
        class="heading-with-paw__image"
      />
    </div>
    <h3
      v-html="headline"
      class="heading-with-paw__headline h3"
    />
  </div>
</template>

<script>
import Paw from '@/assets/images/paw.png';

export default {
  name: 'HeadingWithPaw',
  props: {
    headline: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      Paw,
    };
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.heading-with-paw {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__headline {
    @include font-size(26px, 28px);
    color: #3a3a3a;
    font-weight: 500;
    text-align: center;
    margin-top: 12px;
    @include mq($mq-medium) {
      @include font-size(32px, 34px);
    }
  }

  &__image {
    &-container {
      text-align: center;
    }
    max-width: 100%;
  }
}

</style>
