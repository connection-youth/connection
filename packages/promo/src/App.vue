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
@import "./scss/mixins";

@import "./scss/variables";

// stylelint-disable-next-line selector-max-id
#app,
.content {
  height: 100%;

  @include until($mobile) {
    overflow-x: hidden;
  }
}

* {
  font-family: "Noto Sans KR", sans-serif;
}
</style>
