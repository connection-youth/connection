<script>
export default {
  name: 'YouthSidemenu',
  props: {
    title: {
      type: String,
    },
    sidemenu: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    selected() {
      return this.sidemenu.findIndex(menu => menu.name === this.title);
    },
  },
};
</script>

<template>
  <div class="sidemenu">
    <!-- TODO: render as component -->
    <ul class="sidemenu__list">
      <li
        class="sidemenu__item"
        v-for="(item, idx) in sidemenu"
        :key="idx"
        :class="{ selected: (idx == selected) }"
        @click="$router.push({ name: item.routeName })"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/mixins";

@import "../../scss/variables";

.sidemenu {
  flex-shrink: 0;
  width: 13rem;
  border-right: .5px solid #d9d9d9;
  padding-left: .5rem;
  z-index: -1;

  @include until($mobile) {
    display: none;
  }

  &__list {
    margin-top: .5rem;
  }

  &__item {
    padding-top: .8rem;
    padding-bottom: .8rem;
    color: #575757;
    font-size: 1rem;
    line-height: 1.47;
    cursor: pointer;

    &.selected {
      color: #298fe3;
    }
  }

  &__input {
    border: .5px solid #a4a4a4;
    background-color: #fff;
  }
}
</style>
