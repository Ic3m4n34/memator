<template>
  <div class="list-with-paw">
    <ul class="list-with-paw__list">
      <li
        v-for="(listItem, i) in listItems"
        :key="i"
        class="list-with-paw__list-item"
      >
        <img
          :src="Paw"
          alt="Hundepfote - Therpysiotherapie Meyer"
          class="list-with-paw__paw"
        />
        <span
          v-html="listItem"
          class="list-with-paw__item"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Paw from '@/assets/images/paw.png';

export default {
  name: 'ListWithPaw',
  props: {
    listItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      Paw,
    };
  },
};
</script>

<style lang="scss" scoped>

.list-with-paw {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 36px;

  &__list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 12px;
    }
  }

  &__paw {
    height: 24px;
    width: 24px;
    margin-right: 12px;
  }
}

</style>
