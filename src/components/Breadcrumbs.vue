<template>
  <div class="breadcrumbs">
    <router-link to="/">
      <ios-home-icon class="icon" w="16" h="16" />
    </router-link>
    <span class="separator">/</span>
    {{ routeName }}
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';
.breadcrumbs {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
}
.icon {
  color: $light;
}
.separator {
  margin: 0 0.5rem;
}
</style>
