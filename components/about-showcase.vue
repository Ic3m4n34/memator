<template>
  <div class="about-showcase">
    <div class="about-showcase__headline-container">
      <div class="about-showcase__headline">
        <h3 class="h3">
          About
        </h3>
      </div>
      <div class="about-showcase__color-container">
        <div class="about-showcase__color"></div>
        <img
          src="/images/home/tierphysiotherapie-meyer-about-showcase.jpg"
          alt="Tierphysiotherapie Meyer - Über mich"
          class="about-showcase__image"
        />
      </div>
    </div>
    <div class="about-showcase__description">
      <div class="about-showcase__text-container">
        <h3 class="h3">
          Warum Tierphysiotherapie?
        </h3>
        <p class="text">
          Tiere können genauso wie Menschen an Schmerzen und Bewegungseinschränkungen leiden. Uns hilft in diesem Fall unter anderem die Physiotherapie wieder zurück ins körperliche Gleichgewicht. Tierphysiotherapie hilft den Tieren beweglich und in Bewegung zu bleiben und damit ein aktives und erfülltes Leben zu führen.
        </p>
        <h3 class="h3">
          Schmerzen erkennen!
        </h3>
        <p class="text">
          Wichtig ist die Schmerzen rechtzeitig zu erkennen um Ihrem Tier das erfüllte Leben zu geben was es verdient. Aus diesem Grund habe ich eine Liste erstellt, die Ihnen dabei hilft die Zeichen Ihres Tieres richtig zu deuten:
        </p>
      </div>
      <nuxt-link
        to="#"
        class="about-showcase__button"
      >
        Weiterlesen
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutShowcase',
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/base';

.about-showcase {
  box-shadow: 0 14px 28px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @include mq($navbar-breakpoint) {
    flex-direction: row;
  }
  &__button {
    background: $color-primary;
    color: #ffffff;
    font-weight: 500;
    text-transform: uppercase;
    border: 0;
    padding: 5px 10px;
    border-radius: 5px;
  }

  &__color {
    background-color: $color-primary;
    height: 50px;
    width: 100%;
    @include mq($navbar-breakpoint) {
      width: 50px;
      height: 100%;
    }
    &-container {
      height: 100%;
      overflow-y: visible;
      text-align: center;
    }
  }

  &__headline {
    background: #ffffff;
    @include mq($navbar-breakpoint) {
      width: 100px;
    }

    .h3 {
      text-transform: uppercase;
      text-align: center;
      font-weight: 600;
      color: #f3f3f3;
      font-size: 80px;
      line-height: 80px;
      @include mq($navbar-breakpoint) {
        transform: rotate(-90deg);
        position: relative;
        top: 164px;
        display: block;
        height: 80px;
        width: 408px;
        left: -150px;
      }
    }

    &-container {
      display: flex;
      flex-direction: column;
      @include mq($navbar-breakpoint) {
        flex-direction: row;
      }
    }
  }

  &__image {
    width: 90%;
    top: -20px;
    position: relative;
    @include mq($navbar-breakpoint) {
      top: -390px;
      position: relative;
    }
  }

  &__description {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 36px;
    h3 {
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      color: #292929;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    .text {
      text-align: justify;
      hyphens: auto;
    }
  }

  &__text-container {
    margin-bottom: 36px;
    @include mq($navbar-breakpoint) {
      padding-right: 24px;
    }
  }
}

</style>
