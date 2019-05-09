<template>
  <div class="qualifications-list">
    <ul>
      <li
        v-for="(qualification, index) in qualifications"
        :key="index"
        class="qualifications-list__list-item"
      >
        <img
          :src="checkmarkIcon"
          alt="Therapieangebot - Angebot"
          class="qualifications-list__icon"
        />
        <div class="qualifications-list__date-qual">
          <span class="qualifications-list__date">
            {{ qualification.date }}
          </span>
          <span class="qualifications-list__qualification">
            {{ qualification.description }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import checkmarkIcon from '@/assets/images/checkmark-icon.png';

const QUALIFICATION_LIST = [
  {
    date: '04/2011 - 04/2013',
    description: 'Ausbildung zur Tierphysiotherapeutin Hund und Pferd mit Zusatzqualifikation Akupunktur',
  },
  {
    date: '10/2012',
    description: '„Der Hüftpatient“ Dr.med.vet.Andreas Zohmann',
  },
  {
    date: '02/2013',
    description: '„Manuelle Techniken“ Simone Fuchs',
  },
  {
    date: '05/2013',
    description: '„Gangbildanalyse beim Hund“ FBZ vet. Christiane Gräff Msc.',
  },
  {
    date: '12/2013',
    description: '„Orthopädische Erkrankungen der Vorderextremität“ Dr.med.vet.Ulrich Göggele',
  },
  {
    date: '12/2013',
    description: '„Manuelle Therapie“ Sabine Harrer',
  },
  {
    date: '09/2014',
    description: '„Manuelle Therapie Wirbelsäule Teil I“ Sabine Harrer',
  },
  {
    date: '10/2014',
    description: '„Sportphysiotherapie im Hundesport“ FBZ vet Christiane Gräff',
  },
  {
    date: '03/2015',
    description: '„Manuelle Therapie Wirbelsäule Teil II“ Sabine Harrer',
  },
  {
    date: '03/2015',
    description: '„Der neurologische Patient“ Dr. Kai Rentmeister',
  },
  {
    date: '09/2015',
    description: '„Hydrotherapie“ Dr. Sabine Mai',
  },
  {
    date: '07/2016',
    description: '„Das Reha Rezept“ Dr. Sabine Mai',
  },
  {
    date: '07/2016',
    description: '„Vet Taping“ Dr. Sabine Mai',
  },
  {
    date: '11/2016',
    description: '„RAC Pulsdiagnostik“ Peter Rosin',
  },
  {
    date: '03/2017',
    description: '„Das Hüftgelenk des Hundes“ Peter Rosin',
  },
  {
    date: '11/2017',
    description: '„Grundkurs Laser-Frequenz Therapie nach Vinja Bauer™“ Anette Machentanz',
  },
  {
    date: '07/2018',
    description: '„Technikkurs Laser-Frequenz Therapie nach Vinja Bauer™“',
  },
  {
    date: '09/2018',
    description: '„Röntgen Diagnostik“ Peter Rosin',
  },
];

export default {
  name: 'QualificationsList',
  data() {
    return {
      qualifications: QUALIFICATION_LIST,
      checkmarkIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.qualifications-list {
  &__date {
    font-weight: 600;
    min-width: 150px;
    text-align: left;
    @include mq($mq-medium) {
      margin-right: 12px;
    }
  }

  &__date-qual {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @include mq($mq-medium) {
      flex-direction: row;
    }
  }

  &__icon {
    margin-right: 36px;
    height: 32px;
    width: 32px;
    @include mq($mq-medium) {
      margin-right: 12px;
    }
  }

  &__list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 36px;
    @include mq($mq-medium) {
      margin-bottom: 12px;
    }
  }

  &__qualification {
    text-align: left;
  }
}

</style>
