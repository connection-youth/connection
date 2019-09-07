<script>
export default {
};
</script>

<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// stylelint-disable-next-line selector-max-id
#app,
.content {
  height: 100%;
}

* {
  font-family: "Noto Sans KR", sans-serif;
}
</style>
