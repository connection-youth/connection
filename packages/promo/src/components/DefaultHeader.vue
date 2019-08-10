<script>
export default {
  name: 'DefaultHeader',
  data() {
    return {
      navlist: [
        { name: 'about', routeName: 'about' },
        { name: 'join', routeName: 'join' },
        { name: 'news', routeName: 'news' },
        { name: 'contact us', routeName: 'contact' },
      ],
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
  width: 100%;
}
</style>
