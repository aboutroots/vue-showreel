<template>
  <section class="ContactView container">
    <div class="contact-view-wrapper">
      <ComplexForm />
      <img src="@/assets/img/contract.svg" class="bg-img" alt="Background image with letter" />
    </div>
  </section>
</template>

<script lang="ts">
import ComplexForm from '@/components/ComplexForm.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'ContactView',
  components: {
    ComplexForm,
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
