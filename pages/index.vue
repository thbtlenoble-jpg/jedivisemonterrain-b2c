<template>
  <div>
    <!-- First section -->

    <section
      class="sm:block lg:flex lg:h-screen-lg xl:h-screen-xl overflow-hidden"
    >
      <!-- Left -->
      <div class="lg:w-1/2 sm:w-full overflow-hidden px-4 md:px-8 lg:px-0">
        <AddressInput
          :selected-address="isAddressSelected"
          @address="setAddressList"
          @reset="resetSelectedAddress"
        />
      </div>

      <!-- Right -->
      <div class="lg:w-1/2 sm:w-full h-300 md:h-full relative">
        <!-- Image -->
        <div class="bg-grey01 aboslute w-full h-full">
          <video
            ref="presentation"
            playsinline
            autoplay
            muted
            class="w-full h-full top-0 left-0"
            style="object-fit: cover"
            @ended="onEnd()"
          >
            <source src="animation.mp4" type="video/mp4" />
            <div
              class="division pt-division-sm md:pt-division-md lg:pt-screen-lg xl:pt-screen-xl"
            ></div>
          </video>
          <button
            v-if="endViewVideo"
            class="absolute bottom-0 right-0 m-5"
            @click="reload()"
          >
            <fa-icon :icon="['fas', 'redo']" /> Rejouer la video
          </button>
        </div>
        <AddressList
          v-show="showAddress"
          class="absolute w-full h-full top-0 left-0 lg:h-screen-lg xl:h-screen-xl"
          :list="addressList"
          @choseAddress="choseAddress"
        />
        <Mapbox
          v-if="isAddressSelected"
          class="absolute top-0 h-300 md:h-full w-full"
          :coord="coord"
          :parcelle-selected-infos="parcelleSelectedInfos"
        />
        <!-- Start estimation button -->
        <div
          v-show="parcelleSelectedInfos.length > 0"
          class="absolute z-20 top-0 left-0 right-0 bg-grey01 p-3 shadow-spec pl-4"
          @click="goToLead"
        >
          <t-button class="bg-yellow02 text-grey08 border-none float-right">
            Commencer l'estimation
          </t-button>
          <span v-if="parcelleSelectedInfos.length > 1" class="text-span-xl">
            <strong>{{ parcelleSelectedInfos.length }}</strong> parcelles
            selectionnées
            <span class="block">{{ total }}m² de surface</span>
          </span>
          <span v-else class="text-span-xl">
            <strong>{{ parcelleSelectedInfos.length }}</strong> parcelle
            selectionnée
            <span class="block">{{ total }}m² de surface</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Second section (Comment est-ce possible ?) -->
    <section class="fond relative lg:flex bg-yellow02 overflow-hidden">
      <div
        class="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto lg:px-8 xl:px-12 pb-20 overflow-hidden"
      >
        <!-- Left -->
        <div class="w-full lg:w-1/2 mx-auto float-left">
          <lazy-image
            src="/smartphone-building.svg"
            class="p-8 md:p-20 lg:p-10 lg:py-20"
            alt="Smartphone Building"
          />
        </div>

        <!-- Right -->
        <div
          class="lg:w-1/2 sm:w-full float-left px-4 md:px-8 lg:pl-8 lg:pr-0 lg:py-20"
        >
          <h2 class="mb-4 lg:w-5/6 xl:w-full">Comment est-ce possible ?</h2>
          <p class="mb-4">
            Jedivisemonterrain.fr permet de
            <strong>gagner 30% sur la vente</strong> de votre propriété en
            comparant toutes les solutions possibles de ventes : vente en
            l’état, division parcellaire, lotissement, promotion.
          </p>
          <p class="mb-4">
            En <strong>un clic</strong> vous créez une
            <strong>équipe d’expert</strong> qui réalisera votre projet.
          </p>
          <!-- Icons group -->
          <div class="flex flex-row justify-between">
            <div class="flex flex-col text-center w-1/5">
              <lazy-image
                class="w-3/4 mx-auto"
                src="/secteur.svg"
                alt="Analyse du secteur"
              />
              <span>Analyse du secteur</span>
            </div>
            <div class="flex flex-col text-center w-1/5">
              <lazy-image
                class="w-3/4 mx-auto"
                src="/data.svg"
                alt="Rassemblement de data"
              />
              <span>Rassemblement de data</span>
            </div>
            <div class="flex flex-col text-center w-1/5">
              <lazy-image
                class="w-3/4 mx-auto"
                src="/ia.svg"
                alt="Automatisation de l'estimation"
              />
              <span>Automatisation de l'estimation</span>
            </div>
            <div class="flex flex-col text-center w-1/5">
              <lazy-image
                class="w-3/4 mx-auto"
                src="/expert.svg"
                alt="Le meilleur expert pour vous"
              />
              <span>Le meilleur expert pour vous</span>
            </div>
          </div>
          <t-button href="/#" class="mt-8 float-right border-grey08">
            Commencer mon Estimation gratuite
          </t-button>
        </div>
      </div>
    </section>

    <!-- Third section (Navigator with tabs) -->
    <section class="relative pb-10 lg:pb-16 xl:pb-24 flex bg-grey01">
      <!-- Navigator -->
      <section
        class="relative lg:max-w-screen-lg xl:max-w-screen-xl mx-auto -mt-8 lg:-mt-16 xl:-mt-20 px-4 md:px-8 lg:px-8 xl:px-12 h-full z-20"
      >
        <div>
          <lazy-image
            alt="Navigateur"
            src="/browser-1400.svg"
            class="hidden md:block"
          />
          <lazy-image
            alt="Navigateur"
            src="/browser-320.svg"
            class="md:hidden"
          />
        </div>
        <div class="bg-white shadow-spec rounded-b-md">
          <!-- Tabs -->
          <nav>
            <ul class="flex justify-around text-center">
              <li
                class="py-2 xl:py-4 border-b-3 w-1/4 uppercase cursor-pointer"
                :class="{ 'border-blue01': tab === 0 }"
                @click="tab = 0"
              >
                <h3
                  class="font-light text-grey06 sm:text-span-sm md:text-input-sm lg:text-span-lg xl:text-span-xl"
                  :class="{
                    'text-grey06 font-medium': tab === 0,
                  }"
                >
                  Comment ça marche ?
                </h3>
              </li>
              <li
                class="py-2 xl:py-4 border-b-3 w-1/4 uppercase cursor-pointer"
                :class="{ 'border-blue01': tab === 1 }"
                @click="tab = 1"
              >
                <h3
                  class="font-light text-grey06 sm:text-span-sm md:text-input-sm lg:text-span-lg xl:text-span-xl"
                  :class="{
                    'text-grey06 font-medium': tab === 1,
                  }"
                >
                  Potentiel de mon terrain
                </h3>
              </li>
              <li
                class="py-2 xl:py-4 border-b-3 w-1/4 uppercase cursor-pointer"
                :class="{ 'border-blue01': tab === 2 }"
                @click="tab = 2"
              >
                <h3
                  class="font-light text-grey06 sm:text-span-sm md:text-input-sm lg:text-span-lg xl:text-span-xl"
                  :class="{
                    'text-grey06 font-medium': tab === 2,
                  }"
                >
                  Mon dossier de valorisation
                </h3>
              </li>
              <li
                class="py-2 xl:py-4 border-b-3 w-1/4 uppercase cursor-pointer"
                :class="{ 'border-blue01': tab === 3 }"
                @click="tab = 3"
              >
                <h3
                  class="font-light text-grey06 sm:text-span-sm md:text-input-sm lg:text-span-lg xl:text-span-xl"
                  :class="{
                    'text-grey06 font-medium': tab === 3,
                  }"
                >
                  Mon dossier de vente
                </h3>
              </li>
            </ul>
          </nav>

          <!-- Left arrow -->
          <div
            v-if="tab > 0"
            class="bounce absolute transition duration-150 left-0 ml-5 md:ml-10 mt-40 text-xl md:text-2xl lg:text-4xl cursor-pointer z-30 hover:text-gray-800 text-gray-500"
            @click="tab--"
          >
            <fa-icon :icon="['fas', 'chevron-left']" />
          </div>
          <!-- Right arrow -->
          <div
            v-if="tab < 3"
            class="bounce absolute transition duration-150 right-0 mr-8 md:mr-12 mt-40 text-xl md:text-2xl lg:text-4xl cursor-pointer z-30 hover:text-gray-800 text-gray-500"
            @click="tab++"
          >
            <fa-icon :icon="['fas', 'chevron-right']" />
          </div>

          <!-- Content -->
          <div>
            <!-- Comment ça marche ? -->
            <div v-show="tab === 0" class="sm:block lg:flex lg:p-8 xl:p-10">
              <!-- Left -->
              <div class="w-full p-6 md:w-5/6 md:m-auto lg:pl-24">
                <h3 class="py-5 md:py-8 lg:pt-0 lg:w-5/6">
                  Comment ça marche ?
                </h3>
                <p>
                  Jedivisemonterrain.fr est une plateforme collaborative qui
                  vous permet de valoriser au maximum votre bien. En 3 étapes
                  vous gagnez 30% en moyenne par rapport à une vente classique.
                </p>
              </div>
              <!-- Right -->
              <div class="w-full p-16 md:w-5/6 md:m-auto">
                <lazy-image src="/process.svg" alt="Process" />
              </div>
            </div>

            <!-- Potentiel de mon terrain -->
            <div
              v-show="tab === 1"
              class="sm:block lg:flex p-6 md:p-12 xl:p-16"
            >
              <!-- Stepper -->
              <div
                class="flex lg:flex-col items-center justify-around max-w-xs"
              >
                <div
                  class="rounded-full h-6 w-6 bg-blue01 text-white text-center"
                >
                  1
                </div>

                <div class="w-2/6 h-1px lg:w-1px lg:h-24 mx-2 bg-grey02"></div>

                <div
                  class="rounded-full h-2 w-2 bg-grey02 text-white text-center"
                ></div>

                <div class="w-2/6 h-1px lg:w-1px lg:h-24 mx-2 bg-grey02"></div>

                <div
                  class="rounded-full h-2 w-2 bg-grey02 text-white text-center"
                ></div>
              </div>
              <!-- Left -->
              <div class="w-full lg:w-3/5 p-4 md:p-10 xl:pl-20">
                <span
                  class="uppercase font-semibold text-blue01 text-span-md xl:text-span-xl py-2 block"
                  >Etape 1</span
                >
                <h3>Dossier de potentiel*</h3>
                <p class="pt-2 pb-4 md:pt-4 md:pb-8">
                  Le dossier de potentiel permet de vérifier la valeur théorique
                  de votre bien ainsi que les types de projet qui pourrait mieux
                  valoriser votre propriété à savoir division parcellaire,
                  lotissement, promotion.
                  <span class="block text-blue01 mt-1">
                    *Gratuit et automatique
                  </span>
                </p>
                <nuxt-link
                  to="/how#step1"
                  class="bg-yellow02 text-grey08 border-none transition duration-200 ease-in-out uppercase cursor-pointer text-button-sm md:text-button-md px-3 md:px-5 py-2 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 rounded-md"
                >
                  En savoir plus
                </nuxt-link>
              </div>
              <!-- Right -->
              <div class="w-full lg:w-3/5">
                <lazy-image src="/potentiel-1400.svg" alt="Potentiel" />
              </div>
            </div>

            <!-- Mon dossier de valorisation -->
            <div
              v-show="tab === 2"
              class="sm:block lg:flex p-6 md:p-12 xl:p-16"
            >
              <!-- Stepper -->
              <div
                class="flex lg:flex-col items-center justify-around max-w-xs"
              >
                <div
                  class="rounded-full h-2 w-2 bg-grey02 text-white text-center"
                ></div>

                <div class="w-2/6 h-1px lg:w-1px lg:h-24 mx-2 bg-grey02"></div>

                <div
                  class="rounded-full h-6 w-6 bg-blue01 text-white text-center"
                >
                  2
                </div>

                <div class="w-2/6 h-1px lg:w-1px lg:h-24 mx-2 bg-grey02"></div>

                <div
                  class="rounded-full h-2 w-2 bg-grey02 text-white text-center"
                ></div>
              </div>
              <!-- Left -->
              <div class="w-full lg:w-3/5 p-4 md:p-10 xl:pl-20">
                <span
                  class="uppercase font-semibold text-blue01 text-span-md xl:text-span-xl py-2 block"
                  >Etape 2</span
                >
                <h3>Dossier de valorisation*</h3>
                <p class="pt-2 pb-4 md:pt-4 md:pb-8">
                  Le dossier de valorisation intègre l’analyse du Plan local
                  d’Urbanisme (PLU) et révèle le vrai potentiel de votre bien
                  grâce à nos plans de capacités et nos bilans financiers
                  automatisés.
                  <span class="block text-blue01 mt-1">
                    *Gratuit en collaboration avec une agence immobilière
                    partenaire
                  </span>
                </p>
                <nuxt-link
                  to="/how#step2"
                  class="bg-yellow02 text-grey08 border-none transition duration-200 ease-in-out uppercase cursor-pointer text-button-sm md:text-button-md px-3 md:px-5 py-2 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 rounded-md"
                >
                  En savoir plus
                </nuxt-link>
              </div>
              <!-- Right -->
              <div class="w-full lg:w-3/5">
                <lazy-image src="/valorisation.svg" alt="Valorisation" />
              </div>
            </div>

            <!-- Mon dossier de vente -->
            <div
              v-show="tab === 3"
              class="sm:block lg:flex p-6 md:p-12 xl:p-16"
            >
              <!-- Stepper -->
              <div
                class="flex lg:flex-col items-center justify-around max-w-xs"
              >
                <div
                  class="rounded-full h-2 w-2 bg-grey02 text-white text-center"
                ></div>

                <div class="w-2/6 h-1px lg:w-1px lg:h-24 mx-2 bg-grey02"></div>

                <div
                  class="rounded-full h-2 w-2 bg-grey02 text-white text-center"
                ></div>

                <div class="w-2/6 h-1px lg:w-1px lg:h-24 mx-2 bg-grey02"></div>

                <div
                  class="rounded-full h-6 w-6 bg-blue01 text-white text-center"
                >
                  3
                </div>
              </div>
              <!-- Left -->
              <div class="w-full lg:w-3/5 p-4 md:p-10 xl:pl-20">
                <span
                  class="uppercase font-semibold text-blue01 text-span-md xl:text-span-xl py-2 block"
                  >Etape 3</span
                >
                <h3>Dossier de vente</h3>
                <p class="pt-2 pb-4 md:pt-4 md:pb-8">
                  Le dossier de vente permet de créer une plaquette technique et
                  commerciale du projet d’aménagement de votre terrain. Une
                  équipe d’expert vous est dédiée pour réaliser les demandes
                  d’urbanismes, les plans de faisabilités, les chiffrages de
                  construction et VRD, les constats d’huissier, les clauses
                  juridiques de vente, la commercialisation.
                </p>
                <nuxt-link
                  to="/how#step3"
                  class="bg-yellow02 text-grey08 border-none transition duration-200 ease-in-out uppercase cursor-pointer text-button-sm md:text-button-md px-3 md:px-5 py-2 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 rounded-md"
                >
                  En savoir plus
                </nuxt-link>
              </div>
              <!-- Right -->
              <div class="w-full lg:w-3/5">
                <lazy-image src="/vente.svg" alt="Vente" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      showAddress: false,
      tab: 0,
      addressList: [],
      address: [],
      isAddressSelected: false,
      parcelleSelectedInfos: [],
      coord: [0, 0],
      idVideo: 1,
      endViewVideo: false,
    }
  },
  computed: {
    total(): number {
      let t = 0
      if (this.parcelleSelectedInfos.length > 0) {
        this.parcelleSelectedInfos.forEach((item: any) => {
          t += item.contenance
        })
      }
      return t
    },
  },
  methods: {
    setAddressList(addressList: []) {
      if (addressList.length > 0) {
        this.showAddress = true
      } else {
        this.showAddress = false
      }
      this.addressList = addressList
    },
    choseAddress(address: any) {
      this.showAddress = false
      this.isAddressSelected = true
      this.address = address
      setTimeout(() => {
        this.coord = [
          address.geometry.coordinates[0],
          address.geometry.coordinates[1],
        ]
      }, 200)
    },
    resetSelectedAddress() {
      this.isAddressSelected = false
      this.addressList = []
      this.address = []
      this.parcelleSelectedInfos = []
      this.showAddress = false
      this.coord = [0, 0]
    },
    goToLead() {
      this.$store.commit('selectedParcels/setParcelleSelectedInfos', {
        parcelleSelectedInfos: this.parcelleSelectedInfos,
        address: this.address,
      })
      this.$router.push('lead')
    },
    onEnd() {
      this.endViewVideo = true
    },
    reload() {
      const presentation: any = this.$refs.presentation
      presentation.play()
      this.endViewVideo = false
    },
  },
  head: {
    title: 'Je divise mon terrain | Division parcellaire',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Je divise mon terrain vous accompagne dans la division parcellaire',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Je divise mon terrain',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Expert en division parcellaire',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.jedivisemonterrain.fr/logo.svg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Expert en division parcellaire',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Je divise mon terrain',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Expert en division parcellaire',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.jedivisemonterrain.fr/logo.svg',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Expert en division parcellaire',
      },
    ],
  },
})
</script>

<style scoped>
.division {
  background-image: url(../static/division.jpg);
  background-size: cover;
  background-position: center;
}
.fond {
  background-image: url(../static/fond-building.svg);
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
}

@-webkit-keyframes bounce {
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  0% {
    transform: translateX(0);
  }
}

@keyframes bounce {
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  0% {
    transform: translateX(0);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  animation: bounce 2s ease infinite;
}
</style>
