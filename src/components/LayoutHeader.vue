<template>
  <div id="header" class="LayoutHeader">
    <Breadcrumbs />
    <LoginIndicator />
  </div>
</template>
<script lang="ts">
import Breadcrumbs from '@/components/LayoutBreadcrumbs.vue';
import LoginIndicator from '@/components/LoginIndicator.vue';

import Vue from 'vue';

export default Vue.extend({
  name: 'LayoutHeader',
  components: {
    Breadcrumbs,
    LoginIndicator,
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

#header {
  padding: 1rem;
  max-width: 100vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;

  // leave some space for hamburger button on mobile
  $ham-button-width: 60px;
  margin-left: $ham-button-width;
  width: calc(100vw - #{$ham-button-width});

  @include tabletUp {
    margin-left: $sidebar-width;
    width: calc(100vw - #{$sidebar-width} - 2rem);
  }
}
</style>
