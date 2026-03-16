<template>
  <div
    class="bg-white border border-grey01 rounded-md flex flex-col items-center"
  >
    <img class="w-2/3 mt-4" src="/logo.svg" alt="" />
    <span class="mt-4">STAR STAR STAR</span>
    <span class="text-grey08">
      {{ company.rate }}<span class="text-grey04">/5</span>
    </span>
    <span
      class="text-white rounded-md px-2 mt-4"
      :class="[
        { 'bg-agence': company.type === 'AGENCY' },
        { 'bg-geometre': company.type === 'GEOMETER' },
      ]"
      >{{ company.type }}</span
    >
    <h4 class="mt-4 font-extrabold">{{ company.name }}</h4>
    <span class="mt-6">
      <i class="fab fa-map-marker-alt"></i> {{ company.address }}
    </span>

    <span class="mt-1 mb-5">
      <i class="fab fa-phone"></i> {{ company.phone }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    company: {
      type: Array,
      required: true,
    },
  },
}
</script>
