<script>
export default {
  data() {
    return {
      notice: [
        { title: '커넥션 웹페이지 공지사항', date: '19.07.26' },
        { title: '커넥션 웹페이지 공지사항 12345', date: '19.07.26' },
        { title: '커넥션 웹페이지 공지사항 abcde', date: '19.07.26' },
        { title: '커넥션 웹페이지 공지사항 ㄱㄴㄷㄹㅁㅂㅅ', date: '19.07.26' },
        { title: '커넥션 웹페이지 공지사항', date: '19.07.26' },
      ],
    };
  },
};
</script>

<template>
  <div class="index">
    <div class="index__wrap">
      <div class="box-list">
        <div class="box">
          <div class="box__top">
            <div class="box__tabs">
              <span class="box__tab selected">공지사항</span>
            </div>
            <span class="box__more">더보기</span>
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
              <span class="box__tab selected">보도자료</span>
              <span class="box__tab">외부공시</span>
            </div>
            <span class="box__more">더보기</span>
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
              <span class="box__tab selected">행사/활동 정보</span>
            </div>
            <span class="box__more">더보기</span>
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
      <div class="section">
        <h1 class="section__title">
          Connection?
        </h1>
        <h2 class="section__desc">
          커넥션은 <strong>청소년 창업</strong> 및 <strong>활동 네트워크</strong>입니다
        </h2>
        <p class="section__info">
          커넥션은 창업과 여러 활동을 하는 청소년들 간의 네트워크를 구축하고, 지원하기 위해 2019년 5월 출범하였습니다.
        </p>
        <img
          class="section__illust"
          :src="require('../assets/index/illust.png')"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index {

  &__wrap {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }

  .box-list {
    padding-top: 2.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.box {
  width: 30%;

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
    font-family: "Noto Sans KR", sans-serif;
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
    font-family: "Noto Sans KR", sans-serif;
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
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    line-height: 1.5;
  }

  &__item-date {
    color: #575757;
    font-size: .8rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: normal;
    line-height: 1.5;
  }

  &__gallery {
    margin-top: .7rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 3.3rem);
  }

  &__gallery-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  &__image {
    // stylelint-disable-next-line declaration-property-value-blacklist
    border-style: none;
    width: calc(100%/2);
    height: 100%;
    border: .5px solid #707070;
    object-fit: cover;
    background-color: white;
  }
}

.section {
  margin-top: 6.2rem;
  position: relative;

  &__title {
    font-size: 5rem;
    font-family: "Futura";
    font-weight: bold;
    line-height: 1.1;
  }

  &__desc {
    font-size: 1.6rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: normal;
    line-height: 1.5;
    color: #575757;
  }

  &__desc strong {
    font-weight: bold;
  }

  &__info {
    font-size: 1rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: normal;
    line-height: 1.65;
    letter-spacing: .08px;
    color: #575757;
  }

  &__illust {
    position: absolute;
    z-index: -1;
    width: 87%;
    right: 0;
  }
}
</style>
