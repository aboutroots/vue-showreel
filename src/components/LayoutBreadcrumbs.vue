<template>
  <div class="LayoutBreadcrumbs breadcrumbs">
    <router-link to="/">
      <ios-home-icon class="icon" w="16" h="16" />
    </router-link>
    <span class="separator">/</span>
    {{ routeName }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LayoutBreadcrumbs',
  computed: {
    routeName(): string {
      return this.$route.name ?? '';
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';
.breadcrumbs {
  flex: 1;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}
.icon {
  color: $light;
}
.separator {
  margin: 0 0.5rem;
}
</style>
