<script>
// eslint-disable-next-line
import navlist from '../navlist.json';

export default {
  name: 'DefaultHeader',
  data() {
    return {
      navlist,
    };
  },
};
</script>

<template>
  <header class="header">
    <youth-navbar :navlist="navlist" />
    <slot />
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 60%;
  width: 100%;
}
</style>
