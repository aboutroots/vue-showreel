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
import { mapActions } from 'vuex';

import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  },
  created() {
    // try to automatically log in user
    this.AUTHENTICATE_USER().catch(() => {
      this.LOGOUT_USER();
    });
  },
  methods: {
    ...mapActions(['AUTHENTICATE_USER', 'LOGOUT_USER']),
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

  @media screen and (min-width: 768px) {
    margin-left: $sidebar-width;
  }
}
</style>
