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
    };
  },
  created() {
    this.sidemenu = navlist.find(nav => nav.name === 'join').dropdown;
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
    </div>
  </default-page>
</template>
