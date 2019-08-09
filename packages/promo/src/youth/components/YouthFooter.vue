<script>
export default {
  name: 'YouthFooter',
};
</script>

<template>
  <footer class="footer">
    <slot />
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: absolute;
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
}
</style>
