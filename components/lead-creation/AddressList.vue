<template>
  <section
    class="bg-grey01 px-4 py-4 md:px-8 md:pt-8 lg:pt-16 lg:px-8 xl:px-12"
  >
    <div class="md:mb-4">
      <fa-icon
        :icon="['fas', 'map-marker-alt']"
        class="text-grey03 block text-h3-sm md:text-h2-sm xl:text-h1-sm"
      />
      <span
        class="text-blue01 block text-input-sm md:text-p-sm xl:text-h3-sm font-normal md:pt-2 lg:pt-2"
      >
        Liste des adresses trouvées
      </span>
    </div>

    <div
      v-for="(address, index) of list"
      :key="index"
      class="hover:bg-white cursor-pointer rounded-sm xl:my-2 md:py-1 xl:py-2 pl-2 md:pl-3 xl:pl-4 pr-2 -mx-2 md:-mx-3 xl:-mx-4 address flex justify-between items-center"
      @click="choseAddress(address)"
    >
      <div class="flex flex-col py-2">
        <p class="text-input-sm md:text-span-md xl:text-span-xl">
          {{ address.properties.name }}, {{ address.properties.city }}
          {{ address.properties.postcode }}
        </p>
        <span
          class="text-grey03 text-span-sm md:text-h4-sm xl:text-span-md font-normal"
        >
          {{ address.properties.context }}
        </span>
      </div>
      <div>
        <t-button class="button bg-yellow02 text-grey08 border-none"
          >Choisir cette adresse</t-button
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    choseAddress(address: []) {
      this.$emit('choseAddress', address)
    },
  },
})
</script>

<style>
.address .button {
  display: none;
}
.address:hover .button {
  display: block;
}
</style>
