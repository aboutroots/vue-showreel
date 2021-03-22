<template>
  <div>
    <h1>This is User List View</h1>
    <Loader v-if="processing" />
    <div v-else class="cards-wrapper fadeIn">
      <UserCard :user="user" v-for="user in users" :key="user.id" />
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';
import Loader from '@/components/Loader.vue';

import api from '../services/api';

export default {
  name: 'UsersView',
  components: {
    UserCard,
    Loader,
  },
  data() {
    return {
      processing: false,
      users: [],
    };
  },
  async mounted() {
    await this.loadUsers();
  },
  methods: {
    async loadUsers() {
      this.processing = true;
      try {
        this.users = await api.users.getUsers();
        this.$toast.open('Load successfull!');
      } catch {
        this.$toast.error('Some error occured!');
      }
      this.processing = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
