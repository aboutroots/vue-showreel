<template>
  <div id="header">
    <Breadcrumbs />
  </div>
</template>
<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';

export default {
  name: 'Header',
  components: {
    Breadcrumbs,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

#header {
  padding: 1rem 0;
  width: 100%;
}
</style>
