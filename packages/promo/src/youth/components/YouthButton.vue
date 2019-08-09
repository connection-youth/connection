<script>
export default {
  name: 'YouthButton',
  methods: {
    click(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<template>
  <a
    class="button"
    @click="click"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: .9rem 4.5rem;
  border: .8px solid #298fe3;
  border-radius: 2.5rem;
  color: #298fe3;
  font-size: .9rem;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 1.53;
  letter-spacing: .07px;
  transition: .5s background-color ease;

  &:hover {
    color: white;
    background-color: #298fe3;
  }
}
</style>
