<template>
  <div class="ueber-mich">
    <HeaderImageWIthBreadcrumb :headline="'Über mich'" />
    <div class="container">
      <section class="section">
        <HeadingWithPaw
          :headline="'Peggy Meyer'"
          class="ueber-mich__headline"
        />

        <p class="text">
          Ich bin von klein auf mit Tieren aufgewachsen, Hunde, Katzen, Meerschweinchen, Kaninchen...
          Eigentlich das komplette Programm. Wie das so ist, wenn man auf dem Dorf groß wird. Eigentlich wollte ich Zootierpfleger werden, aber dies war mir nicht möglich. Also ging es für mich über die Mikroelektronik zum Büro. Dies machte mich aber auf Dauer nicht glücklich, so dass ich mich nach Alternativen um sah.
        </p>
        <p class="text">
          Im Jahr 2008 kam ich etwas unfreiwillig mit der Tierphysiotherapie in Berührung (unser Yorki Tommy hatte einen Bandscheibenvorfall, welcher operiert werden musste). Als ich in dieser Zeit gesehen habe was man mit Physiotherapie am Hund bewirken kann, begann ich mich intensiver mit dem Thema zu beschäftigen.
        </p>
        <p class="text">
          In 2010 schrieb ich mich beim Institut für Tierheilkunde für eine Ausbildung zur Tierphysiotherapeutin und – Akupunkteurin für Hund, Katze und Pferd ein. Die Ausbildung begann dann 2011 und im April 2013 hatte ich die Ausbildung beendet und alle Prüfungen erfolgreich bestanden.
          Bereits schon während der Ausbildung besuchte ich mehrere Fortbildungen.
        </p>
        <p class="text">
          Ab Mai 2013 war ich mobil für meine Patienten unterwegs und therapierte in entspannter Atmosphäre zu Hause im gewohnten Umfeld.
          2015 verwirklichte ich mir, mit der riesen Unterstützung meiner Familie, den Traum von der eigenen Praxis mit Unterwasserlaufband.
          Die Tierphysiotherapie sehe ich als sinnvolle Ergänzung und Erweiterung zur klassischen Tiermedizin. Ich lege großen Wert auf die Zusammenarbeit mit Ihrem behandelten Tierarzt.
        </p>
      </section>
      <section class="section">
        <HeadingWithPaw
          :headline="'Die Praxis'"
          class="ueber-mich__headline"
        />
        <Gallery :gallery-id="'5cd070de5b346322597c96fe'" />
      </section>
    </div>
  </div>
</template>

<script>
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
  name: 'UeberMich',
  components: {
    Gallery: () => import('@/components/gallery'),
    HeaderImageWIthBreadcrumb: () => import('@/components/header-image-with-breadcrumb'),
    HeadingWithPaw: () => import('@/components/heading-with-paw'),
  },
};
</script>
<style lang="scss" scoped>
@import 'assets/scss/base';

.ueber-mich {
  @include page-mixin();

  &__headline {
    margin-bottom: 36px;
  }

  .container {
    flex-direction: column;
    text-align: center;
    @include mq($mq-medium) {
      text-align: left;
    }
  }
}

</style>
