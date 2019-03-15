<template>
  <div class="navigation-mobile">
    <button
      @click="toggleMenu"
      type="button"
      :class="{ 'is-active' : navMobileActive }"
      class="hamburger hamburger--squeeze"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NavigationMobile',
  computed: {
    ...mapState({
      navMobileActive: state => state.navigation.navMobileActive,
    }),
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('toggleMobileNav');
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'assets/scss/_hamburger.scss';

.navigation-mobile {
  .hamburger {
    user-select: none;
    &:focus {
      outline: none;
    }
  }
}

</style>
