<template>
  <div v-if="!isAuthenticated">Anonymous user</div>
  <div v-else class="auth-wrap">
    <span> Signed in as </span>
    <span class="username">{{ currentUser.email }}</span>
    <button class="btn" @click="onLogout">Sign out</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'LoginIndicator',
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapState(['currentUser']),
  },
  methods: {
    ...mapActions(['LOGOUT_USER']),
    onLogout() {
      this.LOGOUT_USER();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.auth-wrap {
  color: $gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .username {
    margin: 0 0.5rem;
    color: $light;
  }
}
</style>
