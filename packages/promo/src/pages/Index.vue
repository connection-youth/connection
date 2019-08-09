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
    padding-top: 2.5rem;
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
    padding-bottom: .6rem;
  }

  &__tab {
    cursor: pointer;
    color: #a4a4a4;
    font-size: 1.2rem;
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
    font-size: 1rem;
    font-family: "Noto Sans KR", sans-serif;
    line-height: 2;
    color: #575757;
  }

  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: .7rem;
    padding-bottom: .7rem;
    border-bottom: .5px solid #d9d9d9;
  }

  &__item-title {
    cursor: pointer;
    color: #575757;
    font-size: 1rem;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    line-height: 1.5;
  }

  &__item-date {
    color: #575757;
    font-size: 1rem;
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
</style>
