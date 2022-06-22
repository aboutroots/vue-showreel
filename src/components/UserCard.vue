<template>
  <router-link :to="{ name: 'User Detail', params: { id: user.id } }" class="user-card">
    <img :src="user.avatar" class="avatar" alt="User avatar" />
    <h3 class="title">{{ fullName }}</h3>
    <p class="subtitle">{{ user.email }}</p>
  </router-link>
</template>

<script lang="ts">
import { UserDTO } from '@/models';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'UserCard',
  props: {
    user: {
      type: Object as PropType<UserDTO>,
      default: () => {
        const defaultUser: UserDTO = {
          id: 0,
          email: '',
          first_name: '',
          last_name: '',
          avatar: '',
        };
        return defaultUser;
      },
    },
  },
  computed: {
    fullName(): string {
      return `${this.user.first_name} ${this.user.last_name}`;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.user-card {
  padding: 1rem;
  margin: 0px 1rem 1rem 0px;
  max-width: 200px;
  border-radius: 8px;
  cursor: pointer;

  transition: all 0.2s linear;

  &:hover {
    background-color: $dark2;
  }

  .avatar {
    border-radius: 8px;
  }
  .title {
    text-transform: uppercase;
    color: $light;
  }
  .subtitle {
    color: $gray;
    cursor: auto;
  }
}
</style>
