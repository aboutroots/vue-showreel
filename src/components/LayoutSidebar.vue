<template>
  <div id="nav" class="LayoutSidebar" :class="{ collapsed: !sidebarOpen }">
    <div class="routes-wrapper">
      <div class="hamburger-wrapper">
        <div class="hamburger-btn shadow" @click="toggleCollapsed" @keyup.enter="toggleCollapsed">
          <ios-menu-icon w="32" h="32" />
        </div>
      </div>
      <router-link to="/" class="nav-link"
        ><ios-home-icon class="nav-link-icon" w="20" h="20" />Welcome!</router-link
      >
      <router-link to="/users" class="nav-link">
        <ios-analytics-icon class="nav-link-icon" w="20" h="20" />
        Rest API example</router-link
      >
      <router-link to="/somme-dummy-url" class="nav-link">
        <ios-alert-icon class="nav-link-icon" w="20" h="20" />
        Bad link (404) example</router-link
      >
      <router-link to="/contact" class="nav-link">
        <ios-mail-icon class="nav-link-icon" w="20" h="20" />
        Form example</router-link
      >
      <router-link to="/private-page" class="nav-link">
        <ios-lock-icon class="nav-link-icon" w="20" h="20" />
        Private page example</router-link
      >
      <router-link to="/login" class="nav-link">
        <ios-people-icon class="nav-link-icon" w="20" h="20" />
        Login page</router-link
      >
    </div>
    <a href="https://github.com/aboutroots/vue-showreel/" class="btn btn-cta shadow"
      >Check source on github</a
    >
  </div>
</template>
<script lang="ts">
import { mapActions, mapGetters } from 'vuex';

import Vue from 'vue';

export default Vue.extend({
  name: 'LayoutSidebar',
  computed: {
    ...mapGetters('ui', ['sidebarOpen']),
  },
  methods: {
    ...mapActions('ui', ['TOGGLE_SIDEBAR']),
    toggleCollapsed(): void {
      this.TOGGLE_SIDEBAR();
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

#nav {
  padding: 2rem;
  position: fixed;
  height: 100vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s linear;
  background-color: $dark2;

  // Giding sidebar on mobile devices
  width: $sidebar-width;
  @include tabletDown {
    &.collapsed {
      transform: translateX(-$sidebar-width);
    }
  }
  @include phoneDown {
    width: 250px;
    &.collapsed {
      transform: translateX(-250px);
    }
  }

  .routes-wrapper {
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    text-decoration: none;
    color: $gray;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    .nav-link-icon {
      margin-right: 0.5rem;
      padding-bottom: 0.2rem;
    }

    &.router-link-exact-active {
      color: $light;
    }
  }
  .hamburger-wrapper {
    display: none;
    @include tabletDown {
      display: block;
      position: relative;
      overflow: visible;
      .hamburger-btn {
        background: $dark2;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 2px solid $gray;
        position: absolute;
        top: -12px;
        right: -94px;
        z-index: 100;
      }
    }
  }
}
</style>
