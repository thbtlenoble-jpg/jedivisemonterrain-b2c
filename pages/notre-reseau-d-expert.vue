<template>
  <div>
    <!-- Top -->
    <div
      class="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-8 px-4 md:py-12 lg:py-20 xl:py-24 md:px-8"
    >
      <h1 class="md:w-5/6">Notre réseau d'expert</h1>
      <div class="py-3 md:w-5/6">
        <p>
          En 1 clic nous constituons une équipe d'experts qui valorisera au
          mieux votre propriété.
        </p>
      </div>
    </div>

    <!-- Presentation -->
    <div
      class="experts bg-150 md:bg-100 bg-grey01 py-4 px-4 md:px-8 pt-division-sm md:pt-top-experts text-center"
    >
      <div
        class="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto pb-8 px-4 md:pb-12 lg:pb-20 xl:pb-24 md:px-8"
      >
        <h2 class="w-full">Tous les experts réunis sur notre plateforme</h2>
        <p class="py-3 md:w-5/6 mx-auto">
          Finis le parcours du combattant, retrouvez tous les experts de
          l'aménagement foncier en 1 clic sur jedivisemonterrain.fr
          <span class="block mt-2">
            <span
              class="rounded text-white bg-agence px-2 py-1 xl:px-3 xl:py-2 mt-2 mx-1 xl:mx-2 inline-block"
              >Agences immobilière</span
            >
            <span
              class="rounded text-white bg-geometre px-2 py-1 xl:px-3 xl:py-2 mt-2 mx-1 xl:mx-2 inline-block"
              >Géomètres</span
            >
            <span
              class="rounded text-white bg-architecte px-2 py-1 xl:px-3 xl:py-2 mt-2 mx-1 xl:mx-2 inline-block"
              >Architectes</span
            >
            <span
              class="rounded text-white bg-constructeur px-2 py-1 xl:px-3 xl:py-2 mt-2 mx-1 xl:mx-2 inline-block"
              >Constructeurs</span
            >
            <span
              class="rounded text-white bg-promoteur px-2 py-1 xl:px-3 xl:py-2 mt-2 mx-1 xl:mx-2 inline-block"
              >Promoteurs</span
            >
            <span
              class="rounded text-white bg-lotisseur px-2 py-1 xl:px-3 xl:py-2 mt-2 mx-1 xl:mx-2 inline-block"
              >Lotisseurs</span
            >
            <span
              class="rounded text-white bg-vrd px-2 py-1 xl:px-3 xl:py-2 mt-2 mx-1 xl:mx-2 inline-block"
              >Entreprise de VRD</span
            >
            <span
              class="rounded text-white bg-huissier px-2 py-1 xl:px-3 xl:py-2 mt-2 mx-1 xl:mx-2 inline-block"
              >Huissier</span
            >
          </span>
        </p>
      </div>
    </div>

    <!-- Yellow div -->
    <div class="bg-yellow02 text-center py-10 overflow-hidden">
      <h3 class="mb-4 font-bold px-10">
        Vous souhaitez faire partie de notre réseau d'experts ?
      </h3>
      <t-button class="border-black inline-block"
        >Faire partie de notre réseau d'expert</t-button
      >
    </div>
  </div>
</template>

<script lang="ts">
// export default Vue.extend({})
export default {
  name: 'ExpertsPage',
  head: {
    title: "Notre réseau d'expert",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Composition de notre réseau d'expert",
      },
    ],
  },
}
</script>

<style>
.experts {
  background-image: url(../static/experts.svg);
  background-position: center top;
  background-repeat: no-repeat;
}
</style>
