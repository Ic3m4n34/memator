<template>
  <div class="ueber-mich">
    <HeaderImageWIthBreadcrumb :headline="'Über mich'" />
    <section class="section">
      <div class="container">
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
      </div>
    </section>
    <section class="section">
      <div class="container">
        <HeadingWithPaw
          :headline="'Die Praxis'"
          class="ueber-mich__headline"
        />
        <Gallery :gallery-id="'5cd070de5b346322597c96fe'" />
      </div>
    </section>
    <section class="section">
      <div class="container">
        <HeadingWithPaw
          :headline="'Meine Qualifikationen'"
          class="ueber-mich__headline"
        />
        <QualificationsList />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UeberMich',
  components: {
    Gallery: () => import('@/components/gallery'),
    HeaderImageWIthBreadcrumb: () => import('@/components/header-image-with-breadcrumb'),
    HeadingWithPaw: () => import('@/components/heading-with-paw'),
    QualificationsList: () => import('@/components/qualifications-list'),
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
