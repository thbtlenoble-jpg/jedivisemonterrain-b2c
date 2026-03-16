<template>
  <div>
    <!-- Top -->
    <div
      class="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-8 px-4 md:py-12 lg:py-20 xl:py-24 md:px-8"
    >
      <h1 class="md:w-5/6">Comment ça marche ?</h1>
    </div>

    <!-- Steps -->
    <div class="bg-grey01 px-4 md:px-8">
      <div class="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex">
        <!-- Dossier de potentiel -->
        <div
          class="w-1/3 items-start -mt-5 xl:-mt-10 px-2 pb-4 md:px-4 md:pb-10"
        >
          <h2
            class="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-20 xl:h-20 p-2 rounded-full bg-grey02 text-grey04 text-center"
          >
            1
          </h2>
          <h3 class="mt-6 mb-2">Dossier de potentiel</h3>
          <span class="block">
            Notre algorithme permet de comparer de manière instantanée, les
            différentes solutions de vente grâce au croisement de millions de
            données #Bigdata
          </span>
        </div>

        <!-- Dossier de valorisation -->
        <div
          class="w-1/3 items-start -mt-5 xl:-mt-10 px-2 pb-4 md:px-4 md:pb-10"
        >
          <h2
            class="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-20 xl:h-20 p-2 rounded-full bg-grey02 text-grey04 text-center"
          >
            2
          </h2>
          <h3 class="mt-6 mb-2">Dossier de valorisation</h3>
          <span class="block">
            Notre intelligence artificielle permet de générer des milliers de
            plans d’aménagement et d’obtenir la meilleure solution de vente. #IA
          </span>
        </div>

        <!-- Dossier de vente -->
        <div
          class="w-1/3 items-start -mt-5 xl:-mt-10 px-2 pb-4 md:px-4 md:pb-10"
        >
          <h2
            class="w-10 h-10 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-20 xl:h-20 p-2 rounded-full bg-grey02 text-grey04 text-center"
          >
            3
          </h2>
          <h3 class="mt-6 mb-2">Dossier de vente</h3>
          <span class="block">
            En un 1 clic, une équipe d’expert adaptée à son projet pour réaliser
            le dossier de vente le plus optimisé. #Experts
          </span>
        </div>

        <!-- Exclamation Mark -->
        <div
          class="hidden md:block w-1/5 lg:w-1/6 -mt-20 lg:-mt-32 xl:-mt-48 ml-10"
        >
          <img src="/question.png" alt="" />
        </div>
      </div>
    </div>

    <!-- Yellow div -->
    <div class="bg-yellow02 text-center py-8 lg:py-16">
      <h2 class="text-grey08">Ceci est une révolution* !</h2>
      <span class="text-grey08"
        >*Enfin tout vient de nos équipes et notre réseau d'expert !</span
      >
    </div>

    <!-- Blue div -->
    <div class="relative bg-grey07 text-white">
      <!-- Step 1 -->
      <div id="step1" class="step1 relative lg:flex overflow-hidden">
        <div
          class="lg:flex lg:flex-row lg:max-w-screen-lg xl:max-w-screen-xl mx-auto lg:px-8 xl:px-12 pb-20 xl:pb-40 py-5 overflow-hidden"
        >
          <div
            class="w-full lg:w-3/6 px-4 md:px-8 lg:pl-8 lg:pr-0 lg:py-10 lg:pb-48"
          >
            <span class="text-blue01 font-medium">Etape 1</span>
            <h2 class="font-bold lg:w-3/6">Dossier de potentiel</h2>
            <p class="text-grey02 py-3 lg:pb-8 xl:pt-8">
              Notre algorithme permet de comparer de manière instantanée, les
              différentes solutions de vente grâce au croisement de millions de
              données #Bigdata
            </p>

            <t-button
              v-if="1 === 0"
              class="bg-yellow02 text-grey06 border-transparent"
            >
              Voir un Exemple de dossier
            </t-button>

            <div class="flex justify-between flex-wrap pt-4 xl:pt-16">
              <!-- Estimation de votre bien -->
              <div class="w-3/6 md:w-2/5 xl:w-5/11 pb-5 lg:pb-10 px-2 md:px-0">
                <h3 class="font-bold relative">
                  <div class="bar"></div>
                  Analyse du Marché
                </h3>
                <span class="block text-grey02 pt-2">
                  Historique des ventes, évolution du marché, points d’intérêt,
                  niveau de vie, …
                </span>
              </div>

              <!-- Vos informations -->
              <div class="w-3/6 md:w-2/5 xl:w-5/11 pb-5 lg:pb-10 px-2 md:px-0">
                <h3 class="font-bold relative">
                  <div class="bar"></div>
                  Analyse Constructibilité
                </h3>
                <span class="block text-grey02 pt-2">
                  Zone de constructibilité, accès, normes et coûts de
                  construction, coûts VRD et viabilisation, Adaptation au sol, …
                </span>
              </div>

              <!-- Analyse du marché -->
              <div class="w-3/6 md:w-2/5 xl:w-5/11 pb-5 lg:pb-10 px-2 md:px-0">
                <h3 class="font-bold relative">
                  <div class="bar"></div>
                  Analyse Géographique
                </h3>
                <span class="block text-grey02 pt-2">
                  Densités de logements et de population, hauteurs et tailles
                  des bâtiments, topographie, …
                </span>
              </div>

              <!-- Le meilleur potentiel -->
              <div class="w-3/6 md:w-2/5 xl:w-5/11 pb-5 lg:pb-10 px-2 md:px-0">
                <h3 class="font-bold relative">
                  <div class="bar"></div>
                  Comparatif des solutions
                </h3>
                <span class="block text-grey02 pt-2">
                  Notre scoring de potentiel permet de révéler la solution de
                  vente la plus attractive.
                </span>
              </div>
            </div>
          </div>
          <div
            class="w-full lg:w-3/6 md:w-4/6 md:mx-auto px-10 lg:px-10 pt-5 lg:pt-10 pb-10 -mb-20 lg:-mb-0 lg:pb-0"
          >
            <img class="" src="/ccm-step1.svg" alt="" />
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div
        id="step2"
        class="step2 relative lg:flex overflow-hidden lg:-mt-48 lg:pb-56"
      >
        <div
          class="lg:flex lg:flex-row lg:max-w-screen-lg xl:max-w-screen-xl mx-auto lg:px-8 xl:px-12 pb-20 py-5 overflow-hidden"
        >
          <div class="hidden lg:block lg:w-3/6">
            <img
              src="/ccm-step2.svg"
              class="block max-w-none"
              style="width: 130%"
              alt=""
            />
          </div>
          <div class="w-full lg:w-3/6 px-4 md:px-8 lg:pl-8 lg:pr-0 lg:py-20">
            <span class="text-blue01 font-medium">Etape 2</span>
            <h2 class="font-bold lg:w-3/6">Dossier de valorisation</h2>
            <p class="text-grey02 my-5 lg:pb-8 xl:pt-8">
              Notre intelligence artificielle permet de générer des milliers de
              plans d’aménagement et d’obtenir la meilleure solution de vente.
              #IA
            </p>

            <t-button
              v-if="1 === 0"
              class="bg-yellow02 text-grey06 border-transparent"
            >
              Voir un Exemple de dossier
            </t-button>

            <div class="flex justify-between flex-wrap">
              <div class="flex flex-row justify-between flex-wrap">
                <!-- Analyse du secteur -->
                <div
                  class="w-3/6 md:w-2/5 xl:w-5/11 pb-5 lg:pb-10 px-2 md:px-0"
                >
                  <img
                    class="w-2/5 md:w-1/5 lg:w-2/5"
                    src="/secteur2.svg"
                    alt=""
                  />
                  <h3 class="pt-1 pb-2">Analyse de PLU</h3>
                  <span class="text-grey02 block">
                    Zonage urbain et risques, hauteurs, implantations, emprises
                    au sol, stationnements, logements sociaux.
                  </span>
                </div>
                <!-- Rassemblement de data -->
                <div
                  class="w-3/6 md:w-2/5 xl:w-5/11 pb-5 lg:pb-10 px-2 md:px-0"
                >
                  <img
                    class="w-2/5 md:w-1/5 lg:w-2/5"
                    src="/data2.svg"
                    alt=""
                  />
                  <h3 class="pt-1 pb-2">Plans de capacité</h3>
                  <span class="text-grey02 block">
                    Logements individuels et collectifs, nombre de lots maximum
                    avec ou sans logements sociaux, création d’accès communs en
                    lotissement, aménagement optimum.
                  </span>
                </div>
                <!-- Automatisation de l'estimation -->
                <div
                  class="w-3/6 md:w-2/5 xl:w-5/11 pb-5 lg:pb-10 px-2 md:px-0"
                >
                  <img class="w-2/5 md:w-1/5lg:w-2/5" src="/ia2.svg" alt="" />
                  <h3 class="pt-1 pb-2">Bilan financier</h3>
                  <span class="text-grey02 block">
                    Prix de vente, coûts de construction, d’aménagement,
                    d’études, financiers, seuil de rentabilité.
                  </span>
                </div>
                <!-- Le meilleur expert pour vous -->
                <div
                  class="w-3/6 md:w-2/5 xl:w-5/11 pb-5 lg:pb-10 px-2 md:px-0"
                >
                  <img
                    class="w-2/5 md:w-1/5 lg:w-2/5"
                    src="/expert2.svg"
                    alt=""
                  />
                  <h3 class="pt-1 pb-2">Comparatif des solutions</h3>
                  <span class="text-grey02 block">
                    Nos outils de calcul automatisés permettent d’obtenir
                    rapidement des estimations de chacune des solutions.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:hidden md:w-4/6 md:mx-auto -mt-5 -mb-20 ml-8">
            <img src="/ccm-step2.svg" alt="" />
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div id="step3" class="gradiant lg:-mt-64">
        <div
          class="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto lg:px-8 xl:px-12 pb-10 pt-5 overflow-hidden"
        >
          <div class="text-center w-full px-4 md:px-8 lg:pl-8 lg:pr-0 lg:py-20">
            <span class="text-blue01 font-medium">Etape 3</span>
            <h2 class="font-bold">Dossier de vente</h2>
            <p
              class="text-grey02 my-5 lg:w-3/6 lg:m-auto lg:mt-5 lg:mb-16 xl:pt-8"
            >
              En un 1 clic, une équipe d’experts adaptée à son projet pour
              réaliser le dossier de vente le plus optimisé. #Experts
            </p>

            <t-button
              v-if="1 === 0"
              class="bg-yellow02 text-grey06 border-transparent"
            >
              Voir un Exemple de dossier
            </t-button>

            <div class="md:flex md:justify-between text-left lg:mb-10">
              <!-- Accompagnement dédiée -->
              <div class="w-full mb-5 px-2 lg:pr-8">
                <h3 class="font-bold relative">
                  <div class="bar"></div>
                  Un dossier complet
                </h3>
                <span class="block text-grey02 pt-2">
                  Plan d’aménagement 3D, devis de construction et VRD,
                  Information d’urbanisme sur la parcelle, demandes d’urbanismes
                  déposées, clauses juridiques de vente, constat d’huissier
                  réalisé.
                </span>
              </div>
              <!-- Un réseau d'expert à votre service -->
              <div class="w-full mb-5 px-2 lg:pr-8">
                <h3 class="font-bold relative">
                  <div class="bar"></div>
                  Un réseau d’experts
                </h3>
                <span class="block text-grey02 pt-2">
                  Agences immobilières, géomètres, architectes, constructeurs,
                  entreprises de VRD, notaires, huissiers de justice,
                  promoteurs, lotisseurs.
                </span>
              </div>

              <!-- La vente finale de votre bien -->
              <div class="w-full mb-5 px-2 lg:pr-8">
                <h3 class="font-bold relative">
                  <div class="bar"></div>
                  La vente finale de votre bien
                </h3>
                <span class="block text-grey02 pt-2">
                  Le dossier de vente permet à vos futurs acquéreurs de se
                  projeter avec un projet clé en mains. Vous gagnez du temps et
                  vous vous assurez d’une vente sécurisée et beaucoup mieux
                  valorisée.
                </span>
              </div>
            </div>
            <img
              class="w-full md:w-4/6 md:mx-auto px-2 pt-5"
              src="/ccm-step3.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// export default Vue.extend({})
export default {
  name: 'HowPage',
  data() {
    return {}
  },
  head: {
    title: 'Comment ça marche',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Comment fonctionne notre système de division parcellaire',
      },
    ],
  },
}
</script>

<style>
.bar {
  width: 1px;
  position: absolute;
  left: -10px;
  margin: auto;
  height: 100%;
  @apply bg-blue01;
}
.step1 {
  background-image: url(../static/ccm-yellow.svg);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: countain;
  top: -73px;
  padding-top: 73px;
}
.step2 {
  background-image: url(../static/ccm-blue.svg);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: countain;
}
.gradiant {
  background: transparent linear-gradient(180deg, #272a3a00 0%, #00b9b3b7 100%)
    bottom no-repeat padding-box;
  background-size: 100% 60%;
  z-index: 0;
}
</style>
