<script>
import DefaultBoard from '../../components/DefaultBoard';
import navlist from '../../navlist.json';

export default {
  components: {
    DefaultBoard,
  },
  data() {
    return {
      sidemenu: [],
      list: [
        {
          id: 130,
          title: '커넥션 공지사항 커넥션 공지사항',
          category: '카테고리',
          attachment: false,
          author: '관리자',
          date: '2019-07-27',
          views: 1,
        },
        {
          id: 130,
          title: '커넥션 공지사항 커넥션 공지사항',
          category: '카테고리',
          attachment: false,
          author: '관리자',
          date: '2019-07-27',
          views: 1,
        },
      ],
    };
  },
  created() {
    this.sidemenu = navlist.find(nav => nav.name === 'news').dropdown;
  },
};
</script>

<template>
  <default-board
    title="외부공시"
    :sidemenu="sidemenu"
    :list="list"
  />
</template>
