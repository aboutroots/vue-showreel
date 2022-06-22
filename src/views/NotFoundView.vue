<template>
  <section class="NotFoundView container">
    <div class="not-found">
      <h1>Sorry, the page you requested was not found!</h1>
      <img src="@/assets/img/404.svg" class="bg-img" alt="image with number 404" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NotFoundView',
});
</script>
<style lang="scss" scoped>
.not-found {
  padding: 2rem;
  text-align: center;
}
</style>
