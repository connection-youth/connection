<script>
import DefaultPage from './DefaultPage';

export default {
  props: {
    title: {
      type: String,
    },
    navi: {
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
    list: {
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
    <default-page
      :title="title"
      :navi="navi"
    >
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
            <div class="board__select category">
              <select>
                <option disabled value="" selected>카테고리</option>
              </select>
            </div>
            <div class="board__select type">
              <select>
                <option>제목</option>
                <option>내용</option>
                <option>제목+내용</option>
              </select>
            </div>
            <div class="board__search-wrap">
              <input
                class="board__input"
                placeholder="검색하고자 하는 내용을 입력하세요"
              />
              <img
                class="board__search"
                :src="require('../assets/icons/search-solid.svg')"
              />
            </div>
          </div>
          <div class="board__list">
            <p class="board__result">전체 132건</p>
            <table class="table">
              <thead
                class="table__head"
              >
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>카테고리</th>
                  <th>첨부</th>
                  <th>등록자</th>
                  <th>등록일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="table__post"
                  v-for="(post, idx) in list"
                  :key="idx"
                >
                  <td>{{ post.id }}</td>
                  <td>{{ post.title }}</td>
                  <td>{{ post.category }}</td>
                  <td>-</td>
                  <td>{{ post.author }}</td>
                  <td>{{ post.date }}</td>
                  <td>{{ post.views }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </default-page>
  </div>
</template>

<style lang="scss" scoped>
.board {
  height: 100%;

  &__content {
    display: flex;
    height: 100%;
  }

  &__main {
    flex: 1 1;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &__filter {
    margin-top: 1rem;
    text-align: right;
  }

  &__select {
    padding-top: .3rem;
    padding-bottom: .3rem;
    padding-left: .5rem;
    padding-right: .5rem;
    border: .5px solid #a4a4a4;
    background-color: #fff;
    display: inline-block;
    background-image: url("../assets/icons/arrow-down.svg");
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: .5rem;

    &.category {
      width: 7rem;
      margin-right: .2rem;
    }

    &.type {
      width: 5rem;
    }
  }

  &__select select {
    width: 100%;
    background: transparent;
    border: 0;
    border-radius: 0;
    -webkit-appearance: none;
    color: #a4a4a4;
    font-size: 1rem;
    line-height: 1.47;
    outline: none;
  }

  &__input {
    padding-top: .3rem;
    padding-bottom: .3rem;
    padding-left: .5rem;
    padding-right: .5rem;
    width: 40%;
    border: .5px solid #a4a4a4;
    color: #a4a4a4;
    background-color: #fff;
    font-size: 1rem;
    line-height: 1.47;
    margin-left: .204rem;
  }

  &__input::placeholder {
    color: #a4a4a4;
  }

  &__search-wrap {
    display: inline;
    position: relative;
  }

  &__search {
    position: absolute;
    right: .7rem;
    top: .3rem;
    width: 1rem;
  }

  &__result {
    font-size: .8rem;
    margin: .5rem 0;
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

.table {
  width: 100%;
  font-size: .8rem;
  color: #575757;

  &__head {
    width: 100%;
    background-color: #f2f2f2;
    border-top: .5px solid #707070;
    border-bottom: .5px solid #d9d9d9;

    th {
      padding: .4rem 0;
      text-align: center;
    }

    th:first-child {
      padding-left: .3rem;
    }

    th:nth-child(2) {
      width: 50%;
    }

    th:nth-child(4) {
      width: 8%;
    }

    th:nth-child(5) {
      width: 10%;
    }

    th:last-child {
      padding-right: .3rem;
    }
  }

  &__post {

    td {
      padding-top: .8rem;
      padding-bottom: .8rem;
      border-bottom: .5px solid #d9d9d9;
      text-align: center;
    }

    td:nth-child(2) {
      text-align: left;
      padding: 0 .8rem;
    }
  }
}
</style>
