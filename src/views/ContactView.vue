<template>
  <section class="container">
    <div class="contact-view-wrapper">
      <form class="contact-form" @submit="onSubmit">
        <h1>Contact us!</h1>
        <p>Amazing things are waiting for you, this is not a scam!!! 100% sure!</p>
        <input v-model="name" type="text" class="inp" required placeholder="Your name" />
        <input v-model="email" type="email" class="inp" required placeholder="Your email" />
        <input v-model="body" type="textarea" class="inp big" required placeholder="Your message" />
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
      <img src="@/assets/img/contract.svg" class="bg-img" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      body: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const data = {
        name: this.name,
        email: this.email,
        body: this.body,
      };
      console.log(data);
      this.$toast.open('Thanks!');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.contact-view-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0.5rem;
}
.contact-form {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: $dark2;
  border-radius: 12px;

  h1,
  p {
    text-align: center;
  }
}
</style>
