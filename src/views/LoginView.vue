<template>
  <section class="container">
    <div class="login-form fadeIn">
      <h2>Please log in to continue.</h2>
      <input v-model="email" type="email" class="inp" placeholder="Email" required />
      <input v-model="pass" type="password" class="inp" placeholder="Password" required />
      <button class="btn btn-primary" @click="onSubmit">Sign in</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { get } from 'lodash-es';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      pass: '',
    };
  },
  methods: {
    ...mapActions(['LOGIN_USER']),
    cleanup() {
      this.email = '';
      this.pass = '';
    },
    async onSubmit() {
      try {
        await this.LOGIN_USER({
          username: this.email,
          password: this.pass,
        });

        this.cleanup();

        const nextRoute = get(this.route, 'params.nextRoute', '/');
        this.$router.push({ path: nextRoute });
        this.$toast.open('Logged in!');
      } catch (e) {
        console.error(e);
        this.$toast.error('Some error occured.');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 600px;
}
</style>
