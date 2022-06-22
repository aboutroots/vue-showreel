<template>
  <section class="container">
    <h1>User Detail View</h1>
    <Loader v-if="processing" />
    <div v-else class="user-detail fadeInBasic">
      <img :src="user.avatar" class="avatar" alt="User avatar" />
      <h3 class="title">
        <span class="last">{{ user.last_name }}</span
        >, {{ user.first_name }}
      </h3>
      <p class="subtitle">{{ user.email }}</p>
      <div class="actions">
        <button class="btn">+ FOLLOW</button>
        <button class="btn"><ios-mail-icon class="btn-icon" w="20" h="20" />SEND MESSAGE</button>
      </div>
      <img
        src="@/assets/img/collab.svg"
        class="bg-img"
        alt="Background image with people collaborating"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Loader from '@/components/SimpleLoader.vue';

import Vue from 'vue';
import { UserDTO } from '@/models';
import api from '../services/api';

interface State {
  processing: boolean;
  user: UserDTO;
}

export default Vue.extend({
  name: 'UserDetailView',
  components: {
    Loader,
  },
  data() {
    return {
      processing: false,
      user: {},
    } as State;
  },
  async mounted(): Promise<void> {
    await this.loadUser();
  },
  methods: {
    async loadUser(): Promise<void> {
      this.processing = true;
      try {
        this.user = await api.users.getUser(this.$route.params.id);
      } catch {
        this.$toast.error('Some error occured!');
      }
      this.processing = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';
.user-detail {
  margin-top: 5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  border-radius: 50%;
}
.title {
  font-size: 2rem;
  color: $gray;
  .last {
    text-transform: uppercase;
    color: $light;
  }
}
.subtitle {
  text-transform: uppercase;
  color: $gray;
  font-weight: bold;
}
.actions {
  padding: 2rem;
  border-top: 1px solid $gray;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .btn {
    margin: 0.5rem 2rem;
    .btn-icon {
      margin-right: 0.5rem;
    }
  }
}
.bg-img {
  max-height: 150px;
  margin-top: 2rem;
}
</style>
