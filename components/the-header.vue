<template>
  <div class="the-header">
    <section class="section">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <img
              :src="Logo"
              alt="Tierphysiotherapie Meyer - Logo"
            />
          </div>
          <div class="level-right">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '@/static/images/tierphysiotherapie-meyer-logo.png';

export default {
  name: 'TheHeader',
  data() {
    return {
      Logo,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
