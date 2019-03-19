<template>
  <div class="stage-image">
    <div class="hero">
      <img
        :src="img"
        :alt="alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageImage',
  props: {
    img: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
