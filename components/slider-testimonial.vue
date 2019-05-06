<template>
  <div class="slider-testimonial">
    <div class="slider-testimonial__person">
      <div class="slider-testimonial__image-container">
        <img
          :src="imagePath"
          :alt="imageAltText"
          class="slider-testimonial__image"
        />
      </div>
      <div class="slider-testimonial__name-container">
        <span class="slider-testimonial__name">
          {{ testimonial.name }}
        </span>
        <span class="slider-testimonial__position">
          {{ testimonial.position }}
        </span>
      </div>
    </div>
    <div class="slider-testimonial__statement-container">
      <div class="slider-testimonial__statement-image">
        <img
          src="images/quotationmarks.png"
          alt="Kundenzitat - Tierphysiotherapie Meyer"
        />
      </div>
      <div class="slider-testimonial__statement">
        <p
          v-html="testimonial.testemonial"
          class="text"
        />
      </div>
    </div>
  </div>
</template>

<script>
const apiUrl = process.env.API_URL || 'http://localhost:1337';

export default {
  name: 'SliderTestimonial',
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imagePath() {
      return `${apiUrl}${this.testimonial.image.url}`;
    },
    imageAltText() {
      return `Kundenmeinung von ${this.testimonial.name} - Tierphysiotherapie Meyer`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.slider-testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include mq($mq-medium) {
    flex-direction: row;
    width: 80%;
  }

  &__image {
    &-container {
      box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.1);
      border-radius: 50%;
      overflow: hidden;
      height: 140px;
      width: 140px;
      display: flex;
      align-items: center;
      border: 5px solid #ffffff;
    }
  }

  &__name {
    @include font-size(22px, 24px);
    font-weight: 500;
    color: $color-primary;

    &-container {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
    }
  }

  &__person {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__statement {
    &-container  {
      padding: 48px;
    }

    &-image {
      display: flex;
      flex-direction: row;
      align-content: center;
      margin-bottom: 24px;
      justify-content: center;
      img {
        height: 64px;
        width: 64px;
      }
      @include mq($mq-medium) {
        justify-content: flex-start;
      }
    }
    .text {
      text-align: left;
    }
  }
}

</style>
