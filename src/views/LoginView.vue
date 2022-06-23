<template>
  <section class="LoginView container">
    <form v-if="!isAuthenticated" class="login-form fadeInBasic" @submit="onSubmit">
      <h2>Please log in to continue.</h2>
      <p class="text-secondary">
        You may have been redirected here because the page you accessed is restricted for authorized
        users only.
      </p>
      <input
        v-model="email"
        type="email"
        class="inp"
        placeholder="Email"
        required
        aria-label="email address"
      />
      <input
        v-model="pass"
        type="password"
        class="inp"
        placeholder="Password"
        required
        aria-label="password"
      />
      <button class="btn btn-primary">Sign in</button>
      <p class="text-secondary hint">Hint: username: "george.bluth@reqres.in", password: "test"</p>
    </form>
    <div v-else>
      <h2>You are already signed in.</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { get } from 'lodash-es';

import Vue from 'vue';

interface State {
  email: string;
  pass: string;
}

export default Vue.extend({
  name: 'LoginView',
  head: {
    title: {
      inner: 'Login',
    },
  },
  data() {
    return {
      email: '',
      pass: '',
    } as State;
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['LOGIN_USER']),
    cleanup(): void {
      this.email = '';
      this.pass = '';
    },
    async onSubmit(event: Event): Promise<void> {
      event.preventDefault();
      try {
        await this.LOGIN_USER({
          username: this.email,
          password: this.pass,
        });

        this.cleanup();
        const nextRoute = get(this.$route, 'query.nextRoute', '/');
        this.$router.push({ path: nextRoute });
        this.$toast.open('Logged in!');
      } catch (e) {
        console.error(e);
        this.$toast.error('Some error occured.');
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 600px;
}
.hint {
  text-align: center;
  font-size: 0.8rem;
}
</style>
