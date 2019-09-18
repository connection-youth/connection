<script>
import DefaultHeader from '../components/DefaultHeader';

export default {
  components: {
    DefaultHeader,
  },
  data() {
    return {
      options: {
        duration: 100,
      },
      carousels: [
        { title: '2019 학생 주도 세미나', date: '2019.07.07' },
        { title: '2020 학생 주도 세미나', date: '2020.07.07' },
        { title: '2021 학생 주도 세미나', date: '2021.07.07' },
        { title: '2022 학생 주도 세미나', date: '2022.07.07' },
        { title: '2023 학생 주도 세미나', date: '2023.07.07' },
      ],
      notice: [
        { title: '커넥션 웹페이지 공지사항', date: '19.07.26' },
        { title: '커넥션 웹페이지 공지사항', date: '19.07.26' },
        { title: '커넥션 웹페이지 공지사항', date: '19.07.26' },
        { title: '커넥션 웹페이지 공지사항', date: '19.07.26' },
        { title: '커넥션 웹페이지 공지사항', date: '19.07.26' },
      ],
      news: [
        { title: '커넥션 웹페이지 소식', date: '19.07.26' },
        { title: '커넥션 웹페이지 소식', date: '19.07.26' },
        { title: '커넥션 웹페이지 소식', date: '19.07.26' },
        { title: '커넥션 웹페이지 소식', date: '19.07.26' },
        { title: '커넥션 웹페이지 소식', date: '19.07.26' },
      ],
      externals: [
        { title: '커넥션 웹페이지 외부공시', date: '19.07.26' },
        { title: '커넥션 웹페이지 외부공시', date: '19.07.26' },
        { title: '커넥션 웹페이지 외부공시', date: '19.07.26' },
        { title: '커넥션 웹페이지 외부공시', date: '19.07.26' },
        { title: '커넥션 웹페이지 외부공시', date: '19.07.26' },
      ],
      tab: 0,
      mount: false,
    };
  },
  mounted() {
    this.mount = true;
  },
  computed: {
    isMobile() {
      if (!this.mount) return false;
      return this.windowWidth <= 500;
    },
    selectedList() {
      return (this.tab) ? this.externals : this.news;
    },
  },
  methods: {
    onSelectTab(idx) {
      this.tab = idx;
    },
  },
};
</script>

<template>
  <div class="index">
    <default-header>
      <youth-carousel :carousels="carousels" />
    </default-header>
    <div class="index__wrap">
      <div class="box-list">
        <div class="box">
          <div class="box__top">
            <div class="box__tabs">
              <span class="box__tab selected">
                공지사항
                <figure class="box__circle" />
              </span>
            </div>
            <span
              class="box__more"
              @click="$router.push({ name: 'notice' })"
            >
              더보기
            </span>
          </div>
          <div class="box__list">
            <div
              class="box__item"
              v-for="(item, key) in notice"
              :key="key"
            >
              <span class="box__item-title">
                {{ item.title }}
              </span>
              <span class="box__item-date">
                {{ item.date }}
              </span>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box__top">
            <div class="box__tabs">
              <span
                class="box__tab"
                :class="{ selected: (tab === 0) }"
                @click="onSelectTab(0)"
              >
                보도자료
                <figure
                  class="box__circle"
                  v-if="tab === 0"
                />
              </span>
              <span
                class="box__tab"
                :class="{ selected: (tab === 1) }"
                @click="onSelectTab(1)"
              >
                외부공시
                <figure
                  class="box__circle"
                  v-if="tab === 1"
                />
              </span>
            </div>
            <span
              class="box__more"
              @click="$router.push({ name: (tab) ? 'newsExternal' : 'newsReport' })"
            >
              더보기
            </span>
          </div>
          <div class="box__list">
            <div
              class="box__item"
              v-for="(item, key) in selectedList"
              :key="key"
            >
              <span class="box__item-title">
                {{ item.title }}
              </span>
              <span class="box__item-date">
                {{ item.date }}
              </span>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box__top">
            <div class="box__tabs">
              <span class="box__tab selected">
                행사/활동 정보
              </span>
            </div>
            <span
              class="box__more"
              @click="$router.push({ name: 'newsEvent' })"
            >
              더보기
            </span>
          </div>
          <div class="box__gallery">
            <div class="box__gallery-row">
              <div class="box__image" />
              <div class="box__image" />
            </div>
            <div class="box__gallery-row">
              <div class="box__image" />
              <div class="box__image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index__wrap">
      <div class="section">
        <h1 class="section__title">
          Connection?
        </h1>
        <div>
          <span class="section__desc">
            커넥션은 <strong>청소년 창업</strong> 및 <strong>활동 네트워크</strong>입니다.
          </span>
          <span class="section__info">
            커넥션은 창업과 여러 활동을 하는 청소년들 간의 네트워크를 구축하고, 지원하기 위해 2019년 5월 출범하였습니다.
          </span>
        </div>
        <youth-button
          class="section__button"
          @click="$router.push({ name: 'about' })"
        >
          더 보러가기
        </youth-button>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom__illust-wrap">
        <img
          class="bottom__illust"
          :src="require('../assets/index/illust.png')"
        >
      </div>
      <youth-footer>
        FOOTER
      </youth-footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/mixins";

@import "../scss/variables";

.index {
  position: relative;

  &__wrap {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;

    @include until($mobile) {
      width: 90%;
    }
  }

  .box-list {
    padding-top: 2.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @include until(1000px) {
      padding-top: 1.5rem;
      flex-direction: column;
    }

    @include until(500px) {
      padding-top: 0;
    }
  }
}

.box {
  width: 30%;

  @include until(1000px) {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1.2px solid #d9d9d9;
    padding-bottom: .5rem;
  }

  &__tab {
    cursor: pointer;
    color: #a4a4a4;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.63;
    margin-right: .8rem;

    &.selected {
      color: #575757;
      font-weight: bold;
    }
  }

  &__more {
    cursor: pointer;
    font-size: .9rem;
    line-height: 2;
    color: #575757;
  }

  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: .6rem;
    padding-bottom: .6rem;
    border-bottom: .5px solid #d9d9d9;
  }

  &__item-title {
    cursor: pointer;
    color: #575757;
    font-size: .8rem;
    font-weight: 500;
    line-height: 1.5;
  }

  &__item-date {
    color: #575757;
    font-size: .8rem;
    font-weight: normal;
    line-height: 1.5;
  }

  &__gallery {
    margin-top: .7rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 3.3rem);

    @include until(1000px) {
      height: 15rem;
    }

    @include until($mobile) {
      height: 12.4rem;
    }
  }

  &__gallery-row {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  &__image {
    // stylelint-disable-next-line declaration-property-value-blacklist
    border-style: none;
    width: calc(100%/2);
    border: .5px solid #707070;
    object-fit: cover;
    background-color: white;
  }

  &__circle {
    display: inline-block;
    vertical-align: text-top;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #298fe3;
  }
}

.section {
  margin-top: 6.2rem;
  position: relative;

  @include until($mobile) {
    margin-top: 3rem;
  }

  &__title {
    font-size: 5rem;
    font-family: "Futura";
    font-weight: bold;
    line-height: 1.1;

    @include until(780px) {
      font-size: 4rem;
    }

    @include until(650px) {
      font-size: 2.5rem;
    }

    @include until($mobile) {
      font-size: 2.5rem;
    }
  }

  &__desc {
    display: block;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.5;
    color: #575757;

    @include until($mobile) {
      display: unset;
      font-size: 1rem;
    }
  }

  &__desc strong {
    font-weight: bold;
  }

  &__info {
    display: block;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.65;
    letter-spacing: .08px;
    color: #575757;

    @include until($mobile) {
      display: unset;
    }
  }

  &__button {
    margin-top: 2rem;

    @include until($mobile) {
      margin-top: 1rem;
    }
  }
}

.bottom {
  width: 100%;
  // position: absolute;
  // bottom: 0;
  // z-index: -1;

  @include until($mobile) {
    position: initial;
    bottom: unset;
    z-index: initial;
    margin-top: .5rem;
  }

  &__illust-wrap {
    bottom: 5rem;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    text-align: right;
    padding-bottom: 4.7rem;

    @include until($mobile) {
      width: 100%;
      padding-bottom: 9.9rem;
    }
  }

  &__illust {
    width: 90%;
    margin-top: -5rem;
    z-index: -1;

    @include until($mobile) {
      width: 100%;
      margin-right: -20px;
    }
  }
}
</style>
