<template>
  <section
    class="overflow-hidden lg:h-screen-lg xl:h-screen-xl xl:w-screen-divide-xl lg:w-screen-divide-lg w-full float-right lg:px-8 xl:px-12"
  >
    <h1 class="w-4/6 md:w-3/6 lg:w-4/6 xl:w-5/6 mt-5 mb-5 md:mt-10 lg:mt-20">
      Gagnez 30% sur la vente de votre bien
    </h1>
    <p class="lg:w-5/6 xl:mb-5">
      1ère plateforme d'aménagement foncier qui révèle
      <strong>le vrai potentiel de votre propriété</strong>
    </p>

    <!-- Champ adresse réactivé -->
    <div v-if="!showButton">
      <label for="AddressInput" class="text-opacity-0 absolute text-white"
        >adresse de votre propriété</label
      >
      <input
        id="AddressInput"
        ref="address"
        v-model="address"
        v-debounce:500="getAddress"
        placeholder="Entrer l'adresse de votre propriété"
        class="focus:border-blue01 mt-5 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out mb-5"
      />
    </div>

    <div v-show="showButton" @click="reset()">
      <t-button
        class="hover:bg-grey03 text-button-sm py-2 mb-5 md:mb-10 float-right bg-grey04 text-white"
      >
        Changer d'adresse
      </t-button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import vueDebounce from 'vue-debounce'

Vue.use(vueDebounce)

export default Vue.extend({
  props: {
    selectedAddress: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      address: null as any,
      showButton: false,
    }
  },
  watch: {
    selectedAddress(val: boolean) {
      this.showButton = val
    },
  },
  mounted() {
    // Focus automatique sur le champ au scroll top — uniquement si l'input existe
    window.addEventListener('scroll', () => {
      const input = this.$refs.address as HTMLInputElement | undefined
      if (!input) return
      const scrollPos = window.scrollY
      const winHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const perc = (100 * scrollPos) / (docHeight - winHeight)
      if (perc === 0) {
        input.focus()
      }
    })
  },
  methods: {
    getAddress() {
      if (!this.address || this.address.trim() === '') {
        this.sendAddress([])
        return
      }
      return fetch(
        'https://api-adresse.data.gouv.fr/search/?q=' +
          encodeURIComponent(this.address),
        { method: 'get' }
      )
        .then((res) => res.json())
        .then((data) => {
          this.sendAddress(data.features || [])
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error('Erreur recherche adresse :', err)
        })
    },
    sendAddress(address: []) {
      this.$emit('address', address)
    },
    reset() {
      this.address = ''
      this.showButton = false
      this.$emit('reset', false)
    },
  },
})
</script>
