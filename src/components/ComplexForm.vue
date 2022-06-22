<template>
  <form class="contact-form" @submit="onSubmit">
    <h1>Contact us!</h1>
    <p>Amazing things are waiting for you, this is not a scam!!! 100% sure!</p>
    <ValidationProvider rules="length:3" v-slot="{ errors }">
      <input
        v-model="name"
        type="text"
        name="name"
        class="inp"
        placeholder="Your name"
        aria-label="your name"
      />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <ValidationProvider rules="required|email" v-slot="{ errors }">
      <input
        v-model="email"
        type="email"
        name="email"
        class="inp"
        placeholder="Your email"
        aria-label="your email"
      />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <ValidationProvider rules="min_value:18|required" v-slot="{ errors }">
      <input
        v-model="age"
        name="age"
        type="number"
        class="inp"
        placeholder="Your age"
        aria-label="your age"
      />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <ValidationProvider rules="length:3|required" v-slot="{ errors }">
      <input
        v-model="body"
        type="textarea"
        name="message"
        class="inp big"
        placeholder="Your message"
        aria-label="your message"
      />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';
import '@/helpers/validators';

interface State {
  name: string;
  email: string;
  body: string;
  age: number;
}

export default Vue.extend({
  name: 'ComplexForm',

  components: {
    ValidationProvider,
  },

  data() {
    return {
      name: '',
      email: '',
      body: '',
      age: 0,
    } as State;
  },
  methods: {
    onSubmit(e: Event): void {
      e.preventDefault();
      const data = {
        name: this.name,
        email: this.email,
        body: this.body,
        age: this.age,
      };
      console.log('Submitted:', data);
      this.$toast.open('Thanks!');
    },
  },
});
</script>

<style lang="scss" scoped></style>
