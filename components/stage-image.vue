<template>
  <div class="stage-image">
    <div class="hero">
      <div class="stage-image__container">
        <img
          :src="img"
          :alt="alt"
          class="stage-image__image"
        />
        <div class="stage-image__text-container">
          <div class="stage-image__text">
            <slot name="stageText"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageImage',
  props: {
    img: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.stage-image {
  h1 {
    color: #ffffff;
    font-weight: 600;
    @include font-size(40px, 42px);
  }

  .text {
    color: #ffffff;
  }

  &__container {
    overflow: hidden;
    height: 100%;
    max-height: 40vh;
    position: relative;
    @include mq($mq-medium) {
      max-height: 600px;
    }
  }

  &__image {
    width: auto;
    height: 40vh;
    max-width: none;
    @include mq($mq-medium) {
      height: auto;
      width: 100%;
      max-width: 100%;
    }
  }

  &__text {
    text-align: center;
    width: 40%;
  }

  &__text-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

</style>
