<template>
  <section
    class="sm:block lg:flex lg:h-screen-lg xl:h-screen-xl overflow-hidden"
  >
    <!-- Left -->
    <div class="lg:w-3/5 xl:w-1/2 sm:w-full overflow-hidden lg:overflow-auto">
      <LeadCreation
        :address="address"
        :parcelle-selected-infos="parcelleSelectedInfos"
        @saveLead="saveLead"
      />
    </div>

    <!-- Right -->
    <div class="lg:w-2/5 xl:w-1/2 sm:w-full relative">
      <client-only>
        <Mapbox
          v-if="isReady || coord[0] !== 0"
          class="absolute top-0 hidden lg:block h-full w-full"
          :coord="coord"
          :parcelle-selected-infos="parcelleSelectedInfos"
          :is-ready.sync="isReady"
          :parcelle-select-address="false"
        />
      </client-only>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'lead',
  name: 'LeadPage',
  data() {
    return {
      parcelleSelectedInfos: [] as any[],
      address: null as any,
      coord: [0, 0] as number[],
      showMap: false,
      isReady: false,
    }
  },
  mounted() {
    const storeAddress = this.$store.getters['selectedParcels/getAddress']

    // Guard : si pas d'adresse en store (accès direct à /lead), rediriger
    if (!storeAddress || !storeAddress.geometry) {
      this.$router.push('/')
      return
    }

    this.address = storeAddress
    this.coord = [
      this.address.geometry.coordinates[0],
      this.address.geometry.coordinates[1],
    ]

    this.parcelleSelectedInfos = this.$store.getters[
      'selectedParcels/getParcelleSelectedInfos'
    ]
  },
  methods: {
    /**
     * Reçoit { lead, files } depuis LeadCreation.vue
     * Dispatche vers le store lead pour envoi à BACK-NEST-FR
     */
    async saveLead({ lead, files }: { lead: any; files: any[] }) {
      try {
        await this.$store.dispatch('lead/submitLeadWithFiles', {
          lead,
          files,
          axios: this.$axios,
        })
        // Succès : LeadCreation gère l'affichage step 3
      } catch (err) {
        this.$toast.error(
          'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
          { duration: 5000 }
        )
      }
    },
  },
})
</script>
