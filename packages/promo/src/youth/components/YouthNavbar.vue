<script>
export default {
  name: 'YouthNavbar',
  props: {
    navlist: {
      type: Array,
      default: () => [],
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
      <ul class="navbar__nav-list">
        <li
          class="navbar__nav-item"
          v-for="(item, idx) in navlist"
          :key="idx"
        >
          <router-link
            :to="{ name: item.routeName }"
            class="navbar__nav-link"
          >
            {{ item.name }}
          </router-link>
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
}
</style>
