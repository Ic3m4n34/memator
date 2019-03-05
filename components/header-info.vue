<template>
  <div class="header-info">
    <div class="navbar">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <img
                :src="Logo"
                alt="Tierphysiotherapie Meyer - Logo"
                class="header-info__logo"
              />
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="content has-text-left">
                <span>Machen Sie einen Termin</span>
                <br />
                <span class="text__color--primary">0174 / 3434698</span>
              </div>
            </div>
            <div class="level-item">
              <div class="content has-text-left">
                <span>Location</span>
                <br />
                <span class="text__color--primary">Hauptstraße 19b 99947, Weberstedt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/static/images/tierphysiotherapie-meyer-logo.png';

export default {
  name: 'HeaderInfo',
  data() {
    return {
      Logo,
    };
  },
};
</script>

<style lang="scss" scoped>

.header-info {
  &__logo {
    max-width: 240px;
  }

  .level {
    width: 100%;
  }
}
</style>
