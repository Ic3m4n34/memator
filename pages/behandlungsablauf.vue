<template>
  <div class="behandlungsablauf">
    <HeaderImageWithBreadcrumb :headline="'Behandlungsablauf'" />
    <section class="section">
      <div class="container">
        <p class="text">
          Um eine erfolgreiche Behandlung zu gewährleisten, ist eine ausführliche Eingangsuntersuchung notwendig. Auch bei bereits vorhandener Tierarztdiagnose, ist es wichtig festzustellen welche Strukturen bei ihrem Tier aus physiotherapeutischer Sicht betroffen und somit behandlungsbedürftig sind.
        </p>
        <p class="text">
          Dabei werden folgende Punkte abgehandelt:
          <ListWithPaw :list-items="treatment" />
        </p>
      </div>
    </section>
    <section class="section">
      <div class="behandlungsablauf__headline">
        <HeadingWithPaw :headline="'Behandlungsform'" />
      </div>
      <div class="container">
        <p class="text">
          Die Wahl der Behandlungsform richtet sich nach dem physiotherapeutischen Befund und Beschwerdebild, sie kann durchaus von Behandlung zu Behandlung variieren. Um ein solides Fundament zu schaffen, ist es sinnvoll ein den ersten 2-3 Wochen 2 mal wöchentlich zu therapieren. Meistens kann man danach die Behandlungsintervalle vergrößern.
        </p>
        <p class="text">
          Patienten mit chronischen Beschwerden wie z.B. Arthrose ist eine dauerhafte Behandlung in regelmäßigen Abständen sinnvoll.
        </p>
        <p class="text">
          Zudem erstelle ich für jeden meiner Patienten ein Hausaufgabenprogramm mit Übungen welche mindestens über die Dauer der Behandlung zu Hause täglich durchgeführt werden sollten. Die Übungen werden in der Praxis ausführlich erklärt, besprochen und beübt. Sie werden, je nach Behandlungsfortschritt, angepasst.
        </p>
        <p class="text">
          Vor der Behandlung sollte sich Ihr Vierbeiner auseichend gelöst haben und mind. 2 Stunden vorher nichts gefressen haben.
        </p>
        <p class="text">
          Nach der Behandlung gönnen Sie ihrem Vierbeiner Ruhe.
        </p>
        <p class="text">
          Bitte setzen sie auch keinesfalls von ihren Tierarzt verordnete Medikamente eigenmächtig ab.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
const TREATMENT = [
  'Anamnese- Vorbericht hier werden sie als Patientenbesitzer gefordert… ich frage sie aus zu Vorerkrankungen, Gewohnheiten, Fressverhalten, Kot- und Harnabsatz, Medikation ect.',
  'Beurteilung des Gangbildes (Standbild) - sofern möglich',
  'Körperliche Untersuchung (Muskulatur, Triggerpunkte und Gelenkfunktionsprüfung)',
  'Sichtung mitgebrachter Röntgenbilder und Befunde ggf. Rücksprache mit dem behandelten Tierarzt',
];

export default {
  name: 'Behandlungsablauf',
  components: {
    HeaderImageWithBreadcrumb: () => import('@/components/header-image-with-breadcrumb'),
    HeadingWithPaw: () => import('@/components/heading-with-paw'),
    ListWithPaw: () => import('@/components/list-with-paw'),
  },
  data() {
    return {
      treatment: TREATMENT,
    };
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.behandlungsablauf {
  @include page-mixin();

  &__headline {
    margin-bottom: 24px;
  }

  .container {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .text {
    text-align: left;
  }
}

</style>
