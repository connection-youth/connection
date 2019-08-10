<script>
import DefaultHeader from './DefaultHeader.vue';

export default {
  name: 'DefaultPage',
  components: {
    DefaultHeader,
  },
};
</script>

<template>
  <div class="page">
    <default-header />
    <div class="page__wrap">
      <slot />
    </div>
    <youth-footer>
      FOOTER
    </youth-footer>
  </div>
</template>

<style lang="scss" scoped>
.page {
  height: 100%;

  &__wrap {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }
}
</style>
