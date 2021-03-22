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
.container {
  padding: 2rem;
}
.copy {
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
}
.bg-img {
  margin: 2rem auto;
  max-height: 300px;
}
</style>
