<script>
export default {
  name: 'YouthFooter',
};
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <span class="footer-sep">
          <strong>커넥션 네트워크</strong>
        </span>
        <span class="footer-sep">(가칭) 커넥션 재능기부단 사회적협동조합</span>
      </div>
      <div class="footer-contact">
        <span class="footer-sep">
          <strong>TEL</strong> 0507-1304-9899
        </span>
        <span class="footer-sep">
          <strong>FAX</strong> 0504-486-9899
        </span>
        <span class="footer-sep">
          <strong>Email</strong> support@connectionyouth.org
        </span>
      </div>
      <div class="footer-links">
        <span class="footer-sep">
          <strong>대표</strong> 이제우
        </span>
        <span class="footer-sep">
          <a>개인정보처리방침</a>
        </span>
        <span class="footer-sep">
          <a>Contact Us</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../scss/mixins";

@import "../../scss/variables";

.footer {
  // bottom: 0;
  height: 5rem;
  width: 100%;
  background-color: #414141;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  // @include until($mobile) {
  //   height: 10rem;
  // }

  &-container {
    margin-left: 1rem;
  }

  &-sep {
    position: relative;
    font-family: SegoeUI;
    font-size: .9rem;
    font-weight: 300;
    line-height: 1.33;
    color: #ffffff;

    @include until(650px) {
      font-size: .8rem;

      &:not(:last-child) {
        margin-right: .5rem;
        padding-right: .5rem;
      }
    }

    &:not(:last-child) {
      margin-right: .5rem;
      padding-right: .5rem;
    }

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      top: 50%;
      right: -2px;
      transform: translateY(-50%);
      width: 1px;
      height: 1rem;
      background: white;
    }

    strong {
      font-weight: 700;
    }

    a {
      font-weight: 600;
      color: #298fe3;
    }
  }

  &-top,
  &-bottom,
  &-links {
    display: flex;
  }
}
</style>
