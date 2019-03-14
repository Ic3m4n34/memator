<template>
  <div class="navigation-mobile">
    <button
      @click="toggleMenu"
      type="button"
      :class="{ 'is-active' : menuIsActive }"
      class="hamburger hamburger--squeeze"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavigationMobile',
  data() {
    return {
      menuIsActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsActive = !this.menuIsActive;
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
