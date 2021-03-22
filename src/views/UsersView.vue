<template>
  <section class="container">
    <h1>Users</h1>
    <p>Click on user card to view user profile.</p>
    <Loader v-if="processing" />
    <div v-else class="cards-wrapper fadeIn">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </section>
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
