<template>
  <div class="not-found">
    <h1>Sorry, the page you requested was not found!</h1>
    <img src="@/assets/img/404.svg" class="bg-img" />
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
};
</script>
<style lang="scss" scoped>
.not-found {
  padding: 2rem;
  text-align: center;
}
.bg-img {
  max-height: 300px;
}
</style>
