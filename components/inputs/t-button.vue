<template>
  <a
    class="transition duration-200 ease-in-out uppercase cursor-pointer border text-button-sm md:text-button-md px-3 md:px-5 py-2 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 rounded-md"
  >
    <!-- :to="href ? href : ''" :class="{ 'border-solid': border, 'border-transparent': !border }" -->
    <slot />
  </a>
</template>

<script lang="ts">
export default {
  created() {},
}
</script>

<style scoped>
@media (min-width: 320px) {
  a {
    font-size: 8px;
  }
}
@media (min-width: 768px) {
  a {
    font-size: 10px;
  }
}
@media (min-width: 1024px) {
  a {
    font-size: 11px;
  }
}
@media (min-width: 1400px) {
  a {
    font-size: 13px;
  }
}
</style>
