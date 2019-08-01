<script>
import DefaultHeader from './components/DefaultHeader.vue';

export default {
  components: {
    DefaultHeader,
  },
};
</script>

<template>
  <div id="app">
    <default-header />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
