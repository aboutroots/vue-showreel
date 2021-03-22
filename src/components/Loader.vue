<template>
  <div class="spinner-wrapper">
    <ios-sync-icon class="spinner" w="40" h="40" />
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/theme.scss';

.spinner-wrapper {
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  animation: spin 1000ms linear infinite;
  color: $primary;
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
