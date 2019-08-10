<script>
import DefaultPage from './DefaultPage.vue';

export default {
  props: {
    title: {
      type: String,
    },
    sidemenu: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    DefaultPage,
  },
};
</script>

<template>
  <div class="board">
    <default-page>
      <div class="board__top">
        <h1 class="board__top-title">
          {{ title }}
        </h1>
        <p class="board__top-route">
          Connection > News > {{ title }}
        </p>
      </div>
      <div class="board__content">
        <div class="sidemenu">
          <!-- TODO: render as component -->
          <ul
            class="sidemenu__list"
          >
            <li
              class="sidemenu__item"
              v-for="(item, idx) in sidemenu"
              :key="idx"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="board__main">
          <div class="board__filter">
          </div>
          <div class="board__list">
          </div>
        </div>
      </div>
    </default-page>
  </div>
</template>

<style lang="scss" scoped>
.board {
  height: 100%;
}
</style>
