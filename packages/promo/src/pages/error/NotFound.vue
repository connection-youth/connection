<script>
import DefaultContent from '../../components/DefaultContent';

export default {
  components: {
    DefaultContent,
  },
};
</script>

<template>
  <default-content
    title="페이지를 찾을 수 없음"
    navi="404"
  >
    <div class="error">
      <p>내용 디자인 해주세요!</p>
    </div>
  </default-content>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: center;

  p {
    margin-top: 1rem;
    color: #298fe3;
  }
}
</style>
