<template>
  <div class="header-image-with-breadcrumb">
    <div class="header-image-with-breadcrumb__image">
      <img
        v-show="isMobileScreen"
        src="images/header-image__mobile.jpg"
        alt="Headerbild - Tierphysiotherapie Meyer"
      />
      <img
        v-show="!isMobileScreen"
        src="images/header-image.jpg"
        alt="Headerbild - Tierphysiotherapie Meyer"
      />
    </div>
    <div class="header-image-with-breadcrumb__breadcrumb-container">
      <h1 class="header-image-with-breadcrumb__headline">
        {{ headline }}
      </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderImageWithBreadcrumb',
  props: {
    headline: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      isMobileScreen: 'viewport/isMobileScreen',
    }),
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.header-image-with-breadcrumb {
  position: relative;
  &__breadcrumb-container {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__headline {
    color: #ffffff;
    @include font-size(36px, 38px);
  }

  &__image {
    overflow: hidden;
    height: 50vh;
    position: relative;
    @include mq($mq-medium) {
      height: auto;
    }
    img {
      position: absolute;
      top: -320px;
      display: block;
      @include mq($mq-medium) {
        top: 0;
        position: relative;
      }
    }
  }
}

</style>
