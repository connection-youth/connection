<script>
import DefaultBoard from '../components/DefaultBoard.vue';

export default {
  components: {
    DefaultBoard,
  },
  data() {
    return {
      sidemenu: [
        { name: '공지사항' },
        { name: '행사/활동 정보' },
        { name: '외부공시' },
        { name: '보도자료' },
      ],
    };
  },
};
</script>

<template>
  <default-board
    title="공지사항"
    :sidemenu="sidemenu"
  />
</template>
