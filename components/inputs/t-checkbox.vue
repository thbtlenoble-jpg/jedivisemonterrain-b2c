<template>
  <div class="flex items-center">
    <input
      :id="id"
      ref="inputCheck"
      type="checkbox"
      :disabled="disabled"
      @change="updateCheckbox"
    />
    <label
      :for="id"
      class="pl-2 py-1 block text-input-sm md:text-p-sm xl:text-h4-xl"
    >
      {{ label }}
      <span class="block text-grey04 md:text-h4-sm">{{ informations }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
      default: 'Case à cocher',
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
    informations: {
      type: String,
      required: false,
      default: null,
    },
  },
  methods: {
    updateCheckbox() {
      this.$emit('input', this.value)
    },
  },
})
</script>

<style>
@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type='checkbox'] {
    --active: #00b9b4;
    --active-inner: #fff;
    --focus: 2px rgba(0, 185, 180, 0.3);
    --border: #d8dde2;
    --border-hover: #00b9b4;
    --background: #fff;
    --disabled: #f6f8ff;
    --disabled-inner: #e1e6f9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 14px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    border-radius: 3px;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  }
  input[type='checkbox']:after {
    content: '>';
    transform: rotate(90deg);
    color: white;
    display: block;
    left: 3px;
    top: -5px;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }
  input[type='checkbox']:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  input[type='checkbox']:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
  }
  input[type='checkbox']:disabled:checked {
    --b: var(--disabled-inner);
    --bc: var(--border);
  }
  input[type='checkbox']:disabled + label {
    cursor: not-allowed;
  }
  input[type='checkbox']:hover:not(:checked):not(:disabled) {
    --bc: var(--border-hover);
  }
  input[type='checkbox']:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  input[type='checkbox']:not(.switch) {
    width: 14px;
    min-width: 14px;
  }
  input[type='checkbox']:not(.switch):after {
    opacity: var(--o, 0);
  }
  input[type='checkbox']:not(.switch):checked {
    --o: 1;
  }
}
/*input[type='radio'] {
  border-radius: 50%;
}
input[type='radio']&:checked {
  --s: .5;
}
input[type='radio']:after {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: var(--active-inner);
  opacity: 0;
  transform: scale(var(--s, .7));
}*/
</style>
