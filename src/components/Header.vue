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
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
