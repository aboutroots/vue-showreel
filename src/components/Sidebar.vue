<template>
  <div id="nav">
    <div class="routes-wrapper">
      <router-link to="/" class="nav-link"
        ><ios-home-icon class="nav-link-icon" w="20" h="20" />Welcome!</router-link
      >
      <router-link to="/users" class="nav-link">
        <ios-analytics-icon class="nav-link-icon" w="20" h="20" />
        Rest API example</router-link
      >
      <router-link to="/somme-dummy-url" class="nav-link">
        <ios-alert-icon class="nav-link-icon" w="20" h="20" />
        Bad link (404) example</router-link
      >
      <router-link to="/contact" class="nav-link">
        <ios-mail-icon class="nav-link-icon" w="20" h="20" />
        Form example</router-link
      >
    </div>
    <a hre="https://github.com/aboutroots/" class="btn btn-cta shadow">Check source on github</a>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

#nav {
  padding: 2rem;
  position: fixed;
  width: $sidebar-width;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;

  background-color: $dark2;

  .routes-wrapper {
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    text-decoration: none;
    color: $gray;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    .nav-link-icon {
      margin-right: 0.5rem;
      padding-bottom: 0.2rem;
    }

    &.router-link-exact-active {
      color: $light;
    }
  }
}
</style>
