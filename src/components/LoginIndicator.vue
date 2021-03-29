<template>
  <div class="login-indicator">
    <div v-if="!isAuthenticated">Anonymous user</div>
    <div v-else class="auth-wrap">
      <span class="sub"> Signed in as </span>
      <span class="username">{{ currentUser.email }}</span>
      <div class="logout-icon" @click="onLogout">
        <ios-log-out-icon w="20" h="20" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'LoginIndicator',
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    ...mapState('auth', ['currentUser']),
  },
  methods: {
    ...mapActions('auth', ['LOGOUT_USER']),
    onLogout() {
      this.LOGOUT_USER();
      this.$router.push({ path: '/' });
      this.$toast.open('Signed out!');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.login-indicator {
  margin-bottom: 0.5rem;
  flex: 1;
}

.auth-wrap {
  color: $gray;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  .username {
    margin: 0 0.5rem;
    color: $light;
  }
  .logout-icon {
    cursor: pointer;
  }

  .sub {
    display: none;
  }

  @include tabletUp {
    .sub {
      display: block;
    }
  }
}
</style>
