<template>
  <div class="headline">
    <template v-html="constructedHeadline" />
  </div>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    headline: {
      type: String,
      required: true,
    },
    headlineSize: {
      type: String,
      required: true,
      default: 'h1',
    },
  },
  computed: {
    constructedHeadline() {
      return `<${this.headlineSize}>${this.headline}</${this.headlineSize}>`;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
