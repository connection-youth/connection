<script>
import DefaultBoard from '../components/DefaultBoard';

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
      list: [
        {
          id: 130,
          title: '커넥션 공지사항 커넥션 공지사항 커넥션 공지사항 커넥션 공지사항',
          category: '카테고리',
          attachment: false,
          author: '관리자',
          date: '2019-07-27',
          views: 1,
        },
        {
          id: 130,
          title: '커넥션 공지사항 커넥션 공지사항 커넥션 공지사항 커넥션 공지사항',
          category: '카테고리',
          attachment: false,
          author: '관리자',
          date: '2019-07-27',
          views: 1,
        },
      ],
    };
  },
};
</script>

<template>
  <default-board
    title="공지사항"
    navi="Connection > News > 공지사항"
    :sidemenu="sidemenu"
    :list="list"
  />
</template>
