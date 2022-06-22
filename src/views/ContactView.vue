<template>
  <section class="ContactView container">
    <div class="contact-view-wrapper">
      <form class="contact-form" @submit="onSubmit">
        <h1>Contact us!</h1>
        <p>Amazing things are waiting for you, this is not a scam!!! 100% sure!</p>
        <input
          v-model="name"
          type="text"
          class="inp"
          required
          placeholder="Your name"
          aria-label="your name"
        />
        <input
          v-model="email"
          type="email"
          class="inp"
          required
          placeholder="Your email"
          aria-label="your email"
        />
        <input
          v-model="body"
          type="textarea"
          class="inp big"
          required
          placeholder="Your message"
          aria-label="your message"
        />
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
      <img src="@/assets/img/contract.svg" class="bg-img" alt="Background image with letter" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

interface State {
  name: string;
  email: string;
  body: string;
}
export default Vue.extend({
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      body: '',
    } as State;
  },
  methods: {
    onSubmit(e: Event): void {
      e.preventDefault();
      const data = {
        name: this.name,
        email: this.email,
        body: this.body,
      };
      console.log('Submitted:', data);
      this.$toast.open('Thanks!');
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.contact-view-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  @include tabletUp {
    margin: 0.5rem;
  }
}
.contact-form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: $dark2;
  border-radius: 12px;

  h1,
  p {
    text-align: center;
  }
  @include tabletUp {
    padding: 2rem;
  }
}
</style>
