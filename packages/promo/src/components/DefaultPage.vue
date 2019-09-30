<script>
import DefaultContent from './DefaultContent';

export default {
  name: 'DefaultPage',
  components: {
    DefaultContent,
  },
  props: {
    title: {
      type: String,
    },
    navi: {
      type: String,
    },
    sidemenu: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<template>
  <default-content
    :title="title"
    :navi="navi"
  >
    <div class="page__content">
      <youth-sidemenu
        :title="title"
        :sidemenu="sidemenu"
      />
      <div class="page__main">
        <slot />
      </div>
    </div>
  </default-content>
</template>

<style lang="scss" scoped>
.page {
  height: 100%;
  position: relative;

  &__content {
    display: flex;
    height: -webkit-fill-available;
  }

  &__main {
    flex: 1 1;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
