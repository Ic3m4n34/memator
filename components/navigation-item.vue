<template>
  <div
    class="navigation-item"
    @click="closeNav"
  >
    <nuxt-link
      v-if="!hasChildItems"
      :to="navigationItem.url"
      :title="navigationItem.title"
      class="navbar-item"
    >
      {{ navigationItem.label }}
    </nuxt-link>

    <div
      v-else
      class="navbar-item has-dropdown is-hoverable"
    >
      <a class="navbar-link">
        {{ navigationItem.label }}
      </a>

      <div class="navbar-dropdown">
        <nuxt-link
          v-for="(childItem, _id) in navigationItem.childmenulinks"
          :key="_id"
          :to="childItem.url"
          :title="childItem.title"
          class="navbar-item"
          @click="closeNav"
        >
          {{ childItem.label }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    navigationItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasChildItems() {
      return this.navigationItem.childmenulinks.length > 0;
    },
  },
  methods: {
    closeNav() {
      this.$store.dispatch('toggleMobileNav');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
