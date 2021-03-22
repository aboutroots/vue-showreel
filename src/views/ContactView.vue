<template>
  <div>
    <form @submit="onSubmit" class="contact-form">
      <h1>Contact us!</h1>
      <p>Amazing things are waiting for you, this is not a scam!!! 100% sure!</p>
      <input type="text" class="inp" v-model="name" required placeholder="Your name" />
      <input type="email" class="inp" v-model="email" required placeholder="Your email" />
      <input type="textarea" class="inp big" v-model="body" required placeholder="Your message" />
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
    <img src="@/assets/img/contract.svg" class="bg-img" />
  </div>
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

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 2rem;
  padding: 2rem;
  background-color: $dark2;
  border-radius: 12px;

  h1,
  p {
    text-align: center;
  }

  .inp {
    color: $light;
    border: 1px solid $gray;
    padding: 0.5rem;
    margin-bottom: 1rem;
    background: $dark;

    &:focus {
      border-color: $primary;
    }
    &.big {
      min-height: 200px;
    }
  }
}
.bg-img {
  max-height: 300px;
  margin: 0 200px;
}
</style>
