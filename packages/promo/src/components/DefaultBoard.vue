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
    selected: {
      type: Number,
      default: 0,
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
        <p class="board__top-navi">
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
              :class="{ selected: (idx == selected) }"
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

  &__top-navi {
    font-family: "Noto Sans KR", sans-serif;
    font-size: .9rem;
    font-weight: normal;
    line-height: 1.47;
    color: #a4a4a4;
  }

  &__content {
    display: flex;
    height: 100%;
  }

  &__main {
    flex: 1 1;
  }
}

.sidemenu {
  flex-shrink: 0;
  width: 13rem;
  border-right: .5px solid #d9d9d9;
  padding-left: .5rem;

  &__list {
    margin-top: .5rem;
  }

  &__item {
    padding-top: .8rem;
    padding-bottom: .8rem;
    color: #575757;
    font-size: 1rem;
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1.47;
    cursor: pointer;

    &.selected {
      color: #298fe3;
    }
  }
}
</style>
