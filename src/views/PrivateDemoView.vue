<template>
  <section class="container">
    <p class="copy">Welcome to secret page, for logged in users only!</p>
    <img src="@/assets/img/secure.svg" class="bg-img" />
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style lang="scss" scoped>
.copy {
  text-align: center;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
}
</style>
