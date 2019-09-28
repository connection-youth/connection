<script>
export default {
  name: 'YouthFooter',
  props: {
    absolute: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    computedClass() {
      return {
        position: (this.absolute) ? 'absolute' : 'initial',
      };
    },
  },
};
</script>

<template>
  <footer
    class="footer"
    :style="computedClass"
  >
    <slot />
  </footer>
</template>

<style lang="scss" scoped>
@import "../../scss/mixins";

@import "../../scss/variables";

.footer {
  bottom: 0;
  height: 5rem;
  width: 100%;
  background-color: #414141;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: SegoeUI;
  font-size: 1rem;
  line-height: 1.33;
  color: #ffffff;

  @include until($mobile) {
    height: 10rem;
  }
}
</style>
