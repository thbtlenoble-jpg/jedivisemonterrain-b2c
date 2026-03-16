<template>
  <input
    ref="inputText"
    type="text"
    class="focus:border-blue01 mt-5 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
    :class="{ 'border-agence': error }"
    @input="$emit('update', value)"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: null as any,
      required: true,
    },
    error: {
      type: Boolean,
      required: false,
    },
  },
})
</script>
