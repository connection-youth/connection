<script>
import DefaultPage from '../../components/DefaultPage';
import navlist from '../../navlist.json';
import organization from './organization.json';

export default {
  components: {
    DefaultPage,
  },
  data() {
    return {
      sidemenu: [],
      organization,
    };
  },
  created() {
    this.sidemenu = navlist.find(nav => nav.name === 'about').dropdown;
  },
};
</script>

<template>
  <default-page
    title="조직도 및 직원"
    navi="About > 조직도 및 직원"
    :sidemenu="sidemenu"
  >
    <div class="about">
      <section class="about__section">
        <div class="about__notice">
          <h1 class="about__title">
            조직도
          </h1>
          <p class="about__desc">
            커넥션의 조직도입니다.
          </p>
        </div>
        <div class="about__chart">
          <div class="about__chart-row">
            <div class="about__chart-cell top">
              대표
            </div>
          </div>
          <div class="about__chart-row">
            <div class="about__chart-cell middle">
              임원
            </div>
          </div>
          <div class="about__chart-row">
            <div
              class="about__chart-col"
              v-for="(org, i) in organization"
              :key="`org-${i}`"
            >
              <div class="about__chart-cell bottom">
                <span v-html="org.name" />
              </div>
              <div class="about__chart-list">
                <span
                  class="about__chart-item"
                  v-for="(item, j) in org.child"
                  :key="`item-${i}-${j}`"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about__section">
        <div class="about__notice">
          <h1 class="about__title">
            직원
          </h1>
          <p class="about__desc">
            커넥션의 소중한 가족들입니다.
          </p>
        </div>
      </section>
    </div>
  </default-page>
</template>

<style lang="scss" scoped>
.about {

  &__section {
    margin-top: 1rem;
  }

  &__notice {
    width: 100%;
    color: #575757;
    line-height: 1.55;
    padding-bottom: .8rem;
    border-bottom: .5px solid #707070;
  }

  &__title {
    font-size: 1.2rem;
    color: #298fe3;
  }

  &__desc {
    margin-top: .3rem;
    font-size: .8rem;
  }

  &__chart {
    width: 90%;
    margin: 3.5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-cell {
      margin: auto;
      height: 3rem;
      width: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: .9rem;
    }

    &-cell.top {
      background-color: #3361b8;
    }

    &-cell.middle {
      background-color: #298fe3;
    }

    &-cell.bottom {
      background-color: #37bad6;
    }

    &-row {
      width: 100%;
      margin: .8rem 0;
      display: flex;
      justify-content: space-between;
      align-items: self-end;
    }

    &-col,
    &-list {
      display: flex;
      flex-direction: column;
    }

    &-col:last-child &-cell span {
      text-align: center;
      font-size: .8rem;
    }

    &-list {
      color: #575757;
      margin-top: .5rem;
    }

    &-item {
      margin: .5rem auto;
      font-size: .9rem;
    }
  }
}
</style>
