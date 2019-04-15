<template>
  <div class="therapy-teaser">
    <div class="therapy-teaser__headline">
      <HeadingWithPaw :headline="'Unserer Angebote'" />
    </div>
    <div class="therapy-teaser__container">
      <div class="therapy-teaser__content">
        <h3 class="text h3">
          Therapieangebot
        </h3>
        <ul class="therapy-teaser__list">
          <li
            v-for="(item, i) in therapyOffers"
            :key="i"
            class="therapy-teaser__list-item"
          >
            <img
              :src="checkmarkIcon"
              alt="Therapieangebot - Angebot"
              class="therapy-teaser__list-icon"
            />
            {{ item.name }}
          </li>
        </ul>
        <div class="therapy-teaser__link-container">
          <nuxt-link
            to="/therapieangebot"
            class="therapy-teaser__link"
          >
            Mehr erfahren
          </nuxt-link>
        </div>
      </div>
      <div class="therapy-teaser__image-container">
        <img
          src="/images/home/tierphysiotherapie-meyer-peggy-mit-pferd.jpg"
          alt="Tierphysiotherapeutin Peggy Meyer mit Pferd"
          class="therapy-teaser__image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import checkmarkIcon from '@/assets/images/checkmark-icon.png';

const THERAPY_OFFERS = [
  {
    name: 'Sportphysiotherapie für Hunde',
  },
  {
    name: 'Massage',
  },
  {
    name: 'Gangschulung',
  },
  {
    name: 'Magnetfeldtherapie',
  },
  {
    name: 'Therapeutischer Ultraschall',
  },
  {
    name: 'Laserfrequenztherapie nach Vinja Bauer',
  },
];

export default {
  name: 'TherapyTeaser',
  components: {
    HeadingWithPaw: () => import('@/components/heading-with-paw'),
  },
  data() {
    return {
      checkmarkIcon,
      therapyOffers: THERAPY_OFFERS,
    };
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.therapy-teaser {
  &__container {
    box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    @include mq($mq-medium) {
      flex-direction: row;
      align-items: center;

      > div {
        flex-basis: 50%;
      }
    }
  }

  &__content {
    padding: 12px;
    .h3 {
      @include font-size(26px, 28px);
      font-weight: 500;
      text-align: left;
      margin: 24px 0;
    }

    @include mq($mq-medium) {
      padding: 48px;
    }
  }

  &__headline {
    margin-bottom: 48px;
  }

  &__image {
    display: block;
    @include mq($mq-medium) {
      max-height: 480px;
    }
  }

  &__link {
    text-transform: uppercase;
    text-decoration: underline;
    color: $color-primary;
    font-weight: 500;

    &-container {
      text-align: left;
      margin: 24px 0;
    }
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  &__list-icon {
    height: 24px;
    width: 24px;
    margin-right: 6px;
  }

  &__list-item {
    display: flex;
    align-items: center;
    text-align: left;

    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
}

</style>
