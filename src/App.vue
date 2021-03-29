<template>
  <div id="app">
    <div v-if="isInitialAuthFinished" class="fadeIn">
      <Sidebar />
      <div>
        <Header />
        <main>
          <router-view />
        </main>
      </div>
    </div>
    <template v-else>
      <Loader :full-page="true" />
    </template>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import Sidebar from '@/components/Sidebar.vue';
import Header from '@/components/Header.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    Loader,
  },
  computed: {
    ...mapGetters('auth', ['isInitialAuthFinished']),
  },
  created() {
    // try to automatically log in user
    this.AUTHENTICATE_USER()
      .catch(() => {
        this.LOGOUT_USER();
      })
      .finally(() => {
        this.INITIAL_AUTH_FINISHED();
      });
  },
  methods: {
    ...mapActions('auth', ['AUTHENTICATE_USER', 'LOGOUT_USER', 'INITIAL_AUTH_FINISHED']),
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
  max-width: 100vw;
  overflow: auto;
  padding: 0.5rem;

  @include tabletUp {
    padding: 2rem;
    margin-left: $sidebar-width;
    max-width: calc(100vw - #{$sidebar-width});
  }
}
</style>
