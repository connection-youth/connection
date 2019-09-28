<script>
import DefaultPage from '../../components/DefaultPage';
import navlist from '../../navlist.json';

export default {
  components: {
    DefaultPage,
  },
  data() {
    return {
      sidemenu: [],
      fields: [
        [
          { name: 'name', placeholder: '이름' },
          { name: 'tel', placeholder: "전화번호('-' 제외하고 입력)" },
          { name: 'email', placeholder: '이메일' },
        ],
        [
          { name: 'area', placeholder: '사는지역' },
          { name: 'concern', placeholder: '관심분야' },
        ],
        [
          { name: 'record', placeholder: '이력' },
          { name: 'intro', placeholder: '자기소개' },
          { name: 'wish', placeholder: '바라는 점' },
        ],
      ],
      form: {
        name: '',
        tel: '',
        email: '',
        area: '',
        concern: '',
        record: '',
        intro: '',
        wish: '',
      },
    };
  },
  created() {
    this.sidemenu = navlist.find(nav => nav.name === 'join').dropdown;
  },
  methods: {
    getKeyStyle(field) {
      return {
        visibility: (this.form[field]) ? 'visible' : 'hidden',
      };
    },
  },
};
</script>

<template>
  <default-page
    title="가입 신청"
    navi="Connection > Join > 가입 신청"
    :sidemenu="sidemenu"
  >
    <div class="join">
      <div class="join__notice">
        <h1 class="join__title">
          <span class="connection">커넥션</span> 멤버 가입 신청 페이지입니다.
        </h1>
        <p class="join__desc">신청서 작성 후 완료 버튼을 눌러주세요.<br />
        내부 협의를 거쳐 최종 가입 여부를 안내 드립니다. (1~3주 이내)</p>
      </div>
      <div class="join__form">
        <div class="join__row">
          <div
            class="join__field"
            v-for="(item, key) in fields[0]"
            :key="key"
          >
            <span
              class="join__key"
              :style="getKeyStyle(item.name)"
            >
              {{ item.placeholder }}
            </span>
            <input
              class="join__input"
              :placeholder="item.placeholder"
              v-model="form[item.name]"
            />
          </div>
        </div>
        <div class="join__row">
          <div
            class="join__select"
            v-for="(item, idx) in fields[1]"
            :key="idx"
          >
            <span
              class="join__key"
              :style="getKeyStyle(item.name)"
            >
              {{ item.placeholder }}
            </span>
            <select>
              <option disabled value="" selected>{{ item.placeholder }}</option>
            </select>
          </div>
          <div>
            <span
              class="join__key"
              :style="getKeyStyle('school')"
            >학교</span>
            <input
              class="join__input"
              placeholder="학교"
              v-model="form.school"
            />
          </div>
        </div>
        <div
          class="join__textarea-row"
          v-for="(item, idx) in fields[2]"
          :key="idx"
        >
          <span
            class="join__key"
            :style="getKeyStyle(item.name)"
          >
            {{ item.placeholder }}
          </span>
          <textarea
            :placeholder="item.placeholder"
            class="join__textarea"
            rows="1"
            v-model="form[item.name]"
          />
        </div>
        <div class="join__upload-box">
          <p>포트폴리오 업로드 (선택 사항)</p>
          <div
            class="join__upload-button"
          >
          </div>
          <span class="join__upload-filename"></span>
        </div>
      </div>
      <div class="join__submit-box">
        <button class="join__submit">완료</button>
      </div>
    </div>
  </default-page>
</template>

<style lang="scss" scoped>
.join {
  margin-top: 1rem;
  padding-bottom: 5rem;

  &__notice {
    width: 100%;
    color: #575757;
    line-height: 1.55;
    padding-bottom: .8rem;
    border-bottom: .5px solid #707070;
  }

  &__title {
    font-size: 1.2rem;

    span.connection {
      color: #298fe3;
    }
  }

  &__desc {
    margin-top: .5rem;
    font-size: .8rem;
  }

  &__form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  &__row {
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  &__submit-box {
    text-align: right;
    margin-top: 3rem;
  }

  &__submit {
    color: #fff;
    background-color: #298fe3;
    font-size: .9rem;
    border: 0;
    padding: .9rem 3.2rem;
  }

  &__field {
    width: 30%;
  }

  &__key {
    color: #298fe3;
    font-size: .6rem;
  }

  &__input {
    box-sizing: border-box;
    width: 100%;
    font-size: .9rem;
    padding: .3rem;
    line-height: 1.43;
    border: 0;
    border-bottom: 1.3px solid #a1a1a1;

    &:focus {
      outline: none;
      border-bottom-color: #298fe3;
    }
  }

  &__textarea-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  &__textarea {
    width: 85%;
    box-sizing: border-box;
    text-size-adjust: none;
    font-size: .9rem;
    padding: .3rem;
    line-height: 1.43;
    border: 0;
    border-bottom: 1.3px solid #a1a1a1;
    resize: none;
    font-family: "Noto Sans KR", sans-serif !important;

    &:focus {
      outline: none;
      border-bottom-color: #298fe3;
    }
  }
}
</style>
