<script>
import DefaultHeader from './DefaultHeader';

export default {
  name: 'DefaultPage',
  components: {
    DefaultHeader,
  },
  props: {
    title: {
      type: String,
    },
    navi: {
      type: String,
    },
  },
};
</script>

<template>
  <div class="page">
    <default-header />
    <div class="page__wrap">
      <div class="page__top">
        <h1 class="page__top-title">
          {{ title }}
          <figure class="page__circle" />
        </h1>
        <p class="page__top-navi">
          {{ navi }}
        </p>
      </div>
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
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }

  &__top {
    margin-top: 2.5rem;
    padding-left: .5rem;
    padding-bottom: 1rem;
    border-bottom: .5px solid #d9d9d9;
  }

  &__top-title {
    color: #575757;
    font-size: 1.3rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    line-height: 1.48;
  }

  &__circle {
    display: inline-block;
    vertical-align: top;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #298fe3;
  }

  &__top-navi {
    font-family: "Noto Sans KR", sans-serif;
    font-size: .9rem;
    font-weight: normal;
    line-height: 1.47;
    color: #a4a4a4;
  }
}
</style>
