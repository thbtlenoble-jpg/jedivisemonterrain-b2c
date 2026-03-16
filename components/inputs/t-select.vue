<template>
  <select
    ref="select"
    v-model="value"
    class="focus:border-blue01 px-3 py-2 md:px-4 xl:px-6 md:py-3 lg:py-3 xl:py-4 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
    :placeholder="placeholder"
    @change="updateVal"
  >
    <option value="0">{{ placeholder }}</option>
    <option
      v-for="(val, key) in values"
      :key="key"
      :value="val.value"
      :selected="value === val.value"
    >
      {{ val.name }}
    </option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: null as any,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateVal() {
      this.$emit('input', this.value)
    },
  },
})
</script>
