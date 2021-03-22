<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png" />
    <h1>Welcome!</h1>
    <p class="copy">
      This is an example Vue app. It's using Vue Router that allows Single Page Application
      functionality (if you start clicking on the sidebar, notice changes in the browser's search
      bar.)
    </p>
    <img src="@/assets/img/building.svg" class="bg-img" />
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  text-align: center;
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
