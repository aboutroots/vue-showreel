<template>
  <section class="UsersView container">
    <h1>Users</h1>
    <p>Click on user card to view user profile.</p>
    <Loader v-if="processing" />
    <div v-else class="cards-wrapper fadeInBasic">
      <UserCard v-for="user in users" :key="user.id" :user="user" />
    </div>
  </section>
</template>

<script lang="ts">
import UserCard from '@/components/UserCard.vue';
import Loader from '@/components/SimpleLoader.vue';

import { mapGetters, mapActions } from 'vuex';

import Vue from 'vue';

interface State {
  processing: boolean;
}

export default Vue.extend({
  name: 'UsersView',
  components: {
    UserCard,
    Loader,
  },
  data() {
    return {
      processing: false,
    } as State;
  },

  computed: {
    ...mapGetters('users', {
      users: 'usersList',
    }),
  },

  async mounted(): Promise<void> {
    if (this.users.length === 0) {
      await this.loadUsers();
    }
  },

  methods: {
    ...mapActions('users', ['FETCH_USERS']),

    async loadUsers(): Promise<void> {
      this.processing = true;
      const success = await this.FETCH_USERS();
      if (!success) {
        this.$toast.error('Some error occured!');
      }
      this.processing = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
