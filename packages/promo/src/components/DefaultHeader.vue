<script>
export default {
  name: 'DefaultHeader',
  data() {
    return {
      navlist: [
        { name: 'about', routeName: 'about' },
        { name: 'join', routeName: 'join' },
        { name: 'news', routeName: 'news' },
        { name: 'contact us', routeName: 'contact' },
      ],
      carousels: [
        { title: '2019 학생 주도 세미나', date: '2019.07.07' },
        { title: '2020 학생 주도 세미나', date: '2020.07.07' },
        { title: '2021 학생 주도 세미나', date: '2021.07.07' },
        { title: '2022 학생 주도 세미나', date: '2022.07.07' },
        { title: '2023 학생 주도 세미나', date: '2023.07.07' },
      ],
    };
  },
};
</script>

<template>
  <header class="header">
    <youth-navbar :navlist="navlist" />
    <youth-carousel :carousels="carousels" />
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
}
</style>
