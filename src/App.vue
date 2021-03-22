<template>
  <div id="app">
    <Sidebar />
    <main>
      <Header />
      <router-view />
    </main>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/theme.scss';

#app {
  display: flex;
}
main {
  height: 100vh;
  width: 100%;
  overflow: auto;
  padding: 2rem;
  margin-left: $sidebar-width;
}
</style>
