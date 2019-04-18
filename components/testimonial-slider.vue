<template>
  <div class="testimonial-slider">
    <div class="testimonial-slider__headline">
      <HeadingWithPaw :headline="'Kundenmeinungen'" />
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial._id"
          class="swiper-slide"
        >
          <SliderTestemonial
            :testimonial="testimonial"
          />
        </div>
      </div>
      <div
        class="testimonial-slider__prev-button"
        slot="button-prev"
      >
        <img
          src="/images/icons/arrow.png"
          alt="vorherige Kundenmeinung"
          class="testimonial-slider__prev-button--icon"
        />
      </div>
      <div
        class="testimonial-slider__next-button"
        slot="button-next"
      >
        <img
          src="/images/icons/arrow.png"
          alt="vorherige Kundenmeinung"
          class="testimonial-slider__next-button--icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
  name: 'TestimonialSlider',
  components: {
    HeadingWithPaw: () => import('@/components/heading-with-paw'),
    SliderTestemonial: () => import('@/components/slider-testimonial'),
  },
  data() {
    return {
      testimonials: () => [],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.testimonial-slider__next-button',
          prevEl: '.testimonial-slider__prev-button',
        },
      },
    };
  },
  methods: {
    async fetchTestimonials() {
      const { data } = await strapi.request('post', '/graphql', {
        data: {
          query: `query {
            testimonials {
              _id
              name
              position
              image {
                _id
                url
              }
              testemonial
            }
          }
          `,
        },
      });
      this.testimonials = data.testimonials;
    },
  },
  mounted() {
    this.fetchTestimonials();
  },
};
</script>

<style lang="scss" scoped>

.testimonial-slider {
  width: 100%;

  &__headline {
    margin-bottom: 48px;
  }

  &__prev-button,
  &__next-button {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
  }

  &__prev-button {
    left: 10px;
    right: auto;
    height: 48px;
    width: 48px;

    &--icon {
      transform: rotate(180deg);
    }
  }

  &__next-button {
    right: 10px;
    left: auto;
    height: 48px;
    width: 48px;
  }

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}

</style>
