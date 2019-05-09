<template>
  <div class="therapy-offers-list">
    <ul class="therapy-offers-list__list">
      <li
        v-for="(offer, i) in therapyOffers"
        :key="i"
        class="therapy-offers-list__list-item"
      >
        <div class="therapy-offers-list__link">
          <img
            :src="Paw"
            alt="Hundepfote - Therpysiotherapie Meyer"
            class="therapy-offers-list__paw"
          />
          <nuxt-link
            v-if="offer.link.length > 0"
            :to="offer.link"
          >
            {{ offer.text }}
          </nuxt-link>
          <span
            v-else
          >
            {{ offer.text }}
          </span>
        </div>
        <ul
          v-if="offer.subItems"
          class="therapy-offers-list__sublist"
        >
          <li
            v-for="(subItem, k) in offer.subItems"
            :key="k"
            class="therapy-offers-list__sublist-item"
          >
            <img
              :src="Paw"
              alt="Hundepfote - Therpysiotherapie Meyer"
              class="therapy-offers-list__paw"
            />
            <nuxt-link :to="subItem.link">
              {{ subItem.text }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Paw from '@/assets/images/paw.png';

const THERAPHY_OFFERS = [
  {
    text: 'Sportphysiotherapie für Hunde',
    link: '',
    subItems: [
      {
        text: 'Konditionstraining, Muskelaufbau, Warm up- cool down, Koordinationstraining',
        link: '',
      },
    ],
  },
  {
    text: 'Massage',
    link: '',
  },
  {
    text: 'Manuelle Therapie',
    link: '',
    subItems: [
      {
        text: 'passive und aktive Mobilisierung der betroffenen Struktur (knöchern, muskulär oder nerval)',
        link: '',
      },
    ],
  },
  {
    text: 'Stabilisierende Übungen',
    link: '',
    subItems: [
      {
        text: 'Aktive oder passive Übungen',
        link: '',
      },
    ],
  },
  {
    text: 'Gangschulung',
    link: '',
  },
  {
    text: 'Geräteübungen',
    link: '',
    subItems: [
      {
        text: 'Cavaletti Training',
        link: '',
      },
      {
        text: 'Koordinationstraining',
        link: '',
      },
    ],
  },
  {
    text: 'Lymphdrainage',
    link: '',
  },
  {
    text: 'Magnetfeldtherapie',
    link: '/behandlungen/magnetfeldtherapie',
  },
  {
    text: 'Dehnungen',
    link: '',
  },
  {
    text: 'Narbenmassage',
    link: '',
  },
  {
    text: 'Thermotherapie',
    link: '',
    subItems: [
      {
        text: 'Wärme- und Kältetherapie',
        link: '',
      },
    ],
  },
  {
    text: 'Blutegeltherapie',
    link: '/behandlungen/blutegeltherapie',
  },
  {
    text: 'Therapeutischer Ultraschall',
    link: '',
  },
  {
    text: 'Akupunktur',
    link: '/behandlungen/akupunktur',
  },
  {
    text: 'Hydrotherapie (Unterwasserlaufband)',
    link: '/behandlungen/unterwasserlaufband',
  },
  {
    text: 'Laserfrequenztherapie nach Vinja Bauer',
    link: '/behandlungen/laserfrequenztherapie',
  },
];

export default {
  name: 'TherapyOffersList',
  data() {
    return {
      therapyOffers: THERAPHY_OFFERS,
      Paw,
    };
  },
};
</script>

<style lang="scss" scoped>

.therapy-offers-list {
  width: 100%;
  display: flex;

  &__link {
    display: flex;
    align-items: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &-item {
      width: 100%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 24px;
    }
  }

  &__paw {
    height: 24px;
    width: 24px;
    margin-right: 12px;
  }

  &__sublist {
    margin-left: 48px;
    margin-top: 12px;

    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
  }
}

</style>
