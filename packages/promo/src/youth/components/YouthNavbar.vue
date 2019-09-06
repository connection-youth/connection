<script>
export default {
  name: 'YouthNavbar',
  props: {
    navlist: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      hover: null,
    };
  },
  methods: {
    onHover(item) {
      this.hover = item.name;
    },
    onLeave() {
      this.hover = null;
    },
  },
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar__content">
      <div class="navbar__brand">
        <router-link :to="{ name: 'index' }">
          <img
            class="navbar__logo"
            :src="require('../../assets/full-logo.svg')"
          />
        </router-link>
      </div>
      <ul
        class="navbar__nav-list"
        @mouseleave="onLeave(navItem)"
      >
        <li
          class="navbar__nav-item"
          v-for="(navItem, idx) in navlist"
          :key="idx"
        >
          <router-link
            class="navbar__nav-link"
            @mouseover.native="onHover(navItem)"
            :to="{ name: navItem.routeName }"
          >
            {{ navItem.name }}
          </router-link>
          <div
            v-if="navItem.dropdown && hover === navItem.name"
            class="navbar__nav-dropdown"
          >
            <router-link
              v-for="(item, key) in navItem.dropdown"
              :key="key"
              :to="{ name: item.routeName }"
              class="navbar__nav-dropdown-item"
            >
              {{ item.name }}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  // TODO: tablet, mobile view (960px and under)
  width: 100%;
  background-color: white;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .16);
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-content: center;

  &__content {
    width: 65%;
    display: flex;
    flex-direction: row;
  }

  &__brand {
    display: flex;
  }

  &__logo {
    height: 2.5rem;
  }

  &__nav-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  &__nav-item {
    position: relative;
    display: flex;
    align-self: center;
    font-size: 1.1rem;
    display: inline-flex;
    font-family: SegoeUI;
    text-transform: uppercase;
    margin-left: 3rem;
    cursor: pointer;
  }

  &__nav-link {
    color: #575757;
    text-decoration: none;
    margin-bottom: .3rem;
    user-select: none;
  }

  &__nav-dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2rem;
    left: -3.5rem;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .16);
    min-width: 9rem;
    z-index: 1;
    padding: 0 1rem;
    padding-bottom: .5rem;
  }

  &__nav-dropdown-item {
    padding: .7rem 0;
    color: #575757;
    font-size: 1rem;
    font-family: "Noto Sans KR", sans-serif;
    line-height: 1.43;
    text-decoration: none;

    &:hover,
    &:focus {
      color: #298fe3;
    }

    &:not(:last-child) {
      border-bottom: solid .5px rgba(0, 0, 0, .16);
    }
  }
}
</style>
