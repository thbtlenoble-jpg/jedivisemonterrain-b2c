/* eslint-disable vue/no-textarea-mustache */
<template>
  <textarea
    ref="textArea"
    v-model="value"
    class="focus:border-blue01 h-20 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
    :placeholder="placeholder"
    @input="updateText"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  created() {},
  methods: {
    updateText() {
      this.$emit('input', this.value)
    },
  },
})
</script>
