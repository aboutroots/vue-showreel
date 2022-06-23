<template>
  <section class="PrivateDemoView container">
    <p class="copy">Welcome to secret page, for logged in users only!</p>
    <img alt="Gem image" class="gem-img float" src="@/assets/img/gem.png" />
    <img src="@/assets/img/secure.svg" class="bg-img" alt="lock image" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PrivateDemoView',
  head: {
    title: {
      inner: 'Secret page',
    },
  },
});
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.gem-img {
  max-width: 300px;
  margin-top: 1rem;
  margin: 0 auto;
}
.copy {
  text-align: center;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
}
</style>
