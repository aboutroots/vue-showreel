<template>
  <div id="app">
    <div v-if="isInitialAuthFinished" class="fadeInBasic">
      <Sidebar />
      <div>
        <Header />
        <main>
          <router-view />
        </main>
        <footer id="footer">
          made by <a href="https://github.com/aboutroots/">@aboutroots</a>
        </footer>
      </div>
    </div>
    <template v-else>
      <Loader :full-page="true" />
    </template>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import Sidebar from '@/components/LayoutSidebar.vue';
import Header from '@/components/LayoutHeader.vue';
import Loader from '@/components/SimpleLoader.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Sidebar,
    Header,
    Loader,
  },
  computed: {
    ...mapGetters('auth', ['isInitialAuthFinished']),
  },
  created(): void {
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
});
</script>

<style lang="scss">
@import '@/assets/styles/theme.scss';

#app {
  display: flex;
  max-width: 100vw;
}
main {
  min-height: calc(100vh - $footer-height - $header-height);
  width: 100%;
  max-width: 100vw;
  padding: 0.5rem;

  @include tabletUp {
    padding: 2rem;
    margin-left: $sidebar-width;
    max-width: calc(100vw - #{$sidebar-width} - 1rem);
  }
}

#footer {
  display: flex;
  justify-content: center;
  border-left: 1px solid $dark;
  padding: 2rem;
  background: $dark2;
  a {
    color: $primary;
  }
  @include tabletUp {
    margin-left: $sidebar-width;
    max-width: calc(100vw - #{$sidebar-width} - 1rem);
  }
}
</style>
