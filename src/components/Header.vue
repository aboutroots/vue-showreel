<template>
  <div id="header">
    <Breadcrumbs />
    <LoginIndicator />
  </div>
</template>
<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import LoginIndicator from '@/components/LoginIndicator.vue';

export default {
  name: 'Header',
  components: {
    Breadcrumbs,
    LoginIndicator,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

#header {
  padding: 1rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;

  // leave some space for hamburger button on mobile
  $ham-button-width: 60px;
  margin-left: $ham-button-width;
  width: calc(100vw - #{$ham-button-width});

  @include tabletUp {
    margin-left: $sidebar-width;
    width: calc(100vw - #{$sidebar-width});
  }
}
</style>
