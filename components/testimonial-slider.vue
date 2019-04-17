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
      <div class="swiper-pagination swiper-pagination-bullets"></div>
      <div
        class="swiper-button-prev"
        slot="button-prev"
      />
      <div
        class="swiper-button-next"
        slot="button-next"
      />
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
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
  height: 300px;
  width: 100%;

  &__headline {
    margin-bottom: 48px;
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
