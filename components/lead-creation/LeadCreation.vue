<template>
  <div class="md:flex sm:w-full relative">
    <!-- Left -->
    <div
      class="w-full md:w-1/4 lg:w-3/8 p-4 md:p-8 bg-grey01 md:bg-transparent"
    >
      <p
        v-if="address && address.properties"
        class="text-input-sm md:text-p-sm lg:text-span-lg"
      >
        <span class="block text-input-sm md:text-p-sm lg:text-span-lg">
          {{ address.properties.name }}
        </span>
        {{ address.properties.postcode }} {{ address.properties.city }}
      </p>
      <span class="text-grey04 block pt-2 md:text-p-sm">
        Surface selectionnée
      </span>
      <p class="font-medium text-h4-lg">{{ total }} m²</p>
    </div>
    <!-- Right -->
    <div class="w-full md:w-3/4 mg:w-5/8 p-4 pl-8 md:p-8">
      <!-- Steps -->
      <div v-show="step !== 3" class="py-2 md:py-0">
        <div class="mb-6 relative">
          <div
            class="text-icon-lead text-center"
            :class="[
              { current: step === 0 },
              { validated: step > 0 },
              { waiting: step < 0 },
            ]"
          >
            <fa-icon
              :icon="['fas', 'check']"
              class="text-white"
              :class="[
                { hidden: step === 0 },
                { inline: step > 0 },
                { hidden: step < 0 },
              ]"
            />
          </div>
          <div class="pl-4">
            <p class="font-medium text-button-md md:text-p-sm pt-1 md:pt-0">
              Sélection de votre percelle
            </p>
          </div>
        </div>
        <div class="mb-6 relative">
          <div
            class="text-icon-lead text-center"
            :class="[
              { current: step === 1 },
              { validated: step > 1 },
              { waiting: step < 1 },
            ]"
          >
            <fa-icon
              :icon="['fas', 'check']"
              class="text-white"
              :class="[
                { hidden: step === 1 },
                { inline: step > 1 },
                { hidden: step < 1 },
              ]"
            />
          </div>
          <div class="pl-4">
            <p
              class="font-medium text-button-md md:text-p-sm pt-1 md:pt-0"
              :class="{ 'text-blue01': step === 1 }"
            >
              Informations sur votre projet
            </p>
            <div v-show="step === 1" class="mt-3">
              <div class="md:grid md:grid-cols-2 gap-4">
                <select
                  v-model="lead.topography"
                  class="bg-white focus:border-blue01 px-3 py-2 md:px-4 xl:px-6 md:py-3 lg:py-3 xl:py-4 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                  placeholder="Topographie du terrain"
                >
                  <option value="0">Topographie du terrain</option>
                  <option
                    v-for="(val, key) in topographyList"
                    :key="key"
                    :value="val.value"
                    :selected="lead.topography === val.value"
                  >
                    {{ val.name }}
                  </option>
                </select>
                <select
                  v-model="lead.type"
                  class="sm:mt-4 md:mt-0 bg-white focus:border-blue01 px-3 py-2 md:px-4 xl:px-6 md:py-3 lg:py-3 xl:py-4 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                  placeholder="Type de bien"
                >
                  <option value="0">Type de bien</option>
                  <option
                    v-for="(val, key) in typeList"
                    :key="key"
                    :value="val.value"
                    :selected="lead.type === val.value"
                  >
                    {{ val.name }}
                  </option>
                </select>
              </div>
              <div v-if="lead.type > 1" class="md:grid md:grid-cols-2 gap-4">
                <input
                  v-model="lead.living_space"
                  type="text"
                  class="focus:border-blue01 mt-5 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                  placeholder="Surface de la maison"
                />
                <input
                  v-model="lead.garage_surface"
                  type="text"
                  class="focus:border-blue01 mt-5 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                  placeholder="Surface des annexes (garage, abris, ...)"
                />
              </div>
              <textarea
                v-model="lead.description"
                class="mt-4 focus:border-blue01 h-20 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                placeholder="Décrivez votre projet"
              />
              <t-file-input class="mt-4" @files="setFiles" />
              <div class="mt-4 overflow-hidden" @click="nextstep()">
                <t-button class="bg-yellow02 float-right border-transparent">
                  Valider les infos
                </t-button>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-6 relative">
          <div
            class="text-icon-lead text-center"
            :class="[
              { current: step === 2 },
              { validated: step > 2 },
              { waiting: step < 2 },
            ]"
          >
            <fa-icon
              :icon="['fas', 'check']"
              class="text-white"
              :class="[
                { hidden: step === 2 },
                { inline: step > 2 },
                { hidden: step < 2 },
              ]"
            />
          </div>
          <div class="pl-4">
            <p
              class="font-medium text-button-md md:text-p-sm pt-1 md:pt-0"
              :class="{ 'text-blue01': step === 2 }"
            >
              Informations personnelles
            </p>
            <div v-show="step === 2">
              <div class="md:grid md:grid-cols-2 gap-4">
                <input
                  v-model="lead.person.last_name"
                  type="text"
                  class="focus:border-blue01 mt-5 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                  placeholder="Nom"
                />
                <input
                  v-model="lead.person.first_name"
                  type="text"
                  class="focus:border-blue01 mt-5 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                  placeholder="Prénom"
                />
              </div>
              <div class="md:grid md:grid-cols-2 gap-4">
                <input
                  v-model="lead.person.email"
                  type="text"
                  class="focus:border-blue01 mt-5 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                  placeholder="Adresse e-mail"
                />
                <input
                  v-model="lead.person.phone"
                  type="text"
                  class="focus:border-blue01 mt-5 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                  placeholder="Téléphone"
                />
              </div>
              <div class="flex items-center my-4">
                <input id="pro" v-model="lead.person.is_pro" type="checkbox" />
                <label
                  for="pro"
                  class="pl-2 py-1 block text-input-sm md:text-p-sm xl:text-h4-xl"
                >
                  Etes-vous un professionnel ?
                </label>
              </div>
              <div v-if="lead.person.is_pro" class="flex">
                <input
                  v-model="lead.name_pro"
                  type="text"
                  class="focus:border-blue01 px-3 py-2 md:px-4 xl:px-6 md:py-3 text-input-sm md:text-p-sm xl:text-h4-xl rounded border-solid border-1 w-full focus:outline-none transition duration-200 ease-in-out"
                  placeholder="Nom de votre société"
                />
              </div>
              <div class="flex items-center my-4">
                <input id="cgu" v-model="cgu" type="checkbox" class="mt-4" />
                <div>
                  <label
                    for="cgu"
                    class="pl-2 pt-1 block text-input-sm md:text-p-sm xl:text-h4-xl"
                  >
                    Conditions générales d'utilisation
                    <span class="block text-grey04 md:text-h4-sm">
                      En cochant cette case vous acceptez les conditions
                      générales générales d'utilisation du site
                      jedivisimonterrain.fr
                    </span>
                  </label>
                  <span class="cursor-pointer px-2" @click="showModal = true">
                    Voir les CGU
                  </span>
                </div>
              </div>
              <div class="overflow-hidden">
                <span v-if="!loading" @click="nextstep()">
                  <t-button
                    class="hover:bg-yellow01 bg-yellow02 float-right border-transparent"
                  >
                    Valider les infos
                  </t-button>
                </span>
                <span v-else>
                  <t-button
                    class="flex items-center opacity-75 bg-yellow02 float-right border-transparent"
                  >
                    <fa-icon
                      :icon="['fas', 'spinner-third']"
                      class="animate-spin text-grey08 opacity-50 mr-2 block text-p-sm md:text-p-lg lg:text-p-sm"
                    />
                    Valider les infos
                  </t-button>
                </span>
                <span @click="step--">
                  <t-button class="float-right mr-5">Retour</t-button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3 relative">
          <div
            class="text-icon-lead text-center"
            :class="[
              { current: step === 3 },
              { validated: step > 3 },
              { waiting: step < 3 },
            ]"
          >
            <fa-icon
              :icon="['fas', 'check']"
              class="text-white"
              :class="[
                { hidden: step === 3 },
                { inline: step > 3 },
                { hidden: step < 3 },
              ]"
            />
          </div>
          <div class="pl-4">
            <p
              class="font-medium text-button-md md:text-p-sm pt-1 md:pt-0"
              :class="{ 'text-blue01': step === 3 }"
            >
              Découvrez votre vrai potentiel
            </p>
          </div>
        </div>
      </div>
      <div v-show="step === 3" class="lg:text-center">
        <fa-icon
          :icon="['fas', 'thumbs-up']"
          class="text-grey02 text-h1-xl mt-5 mb-10"
        />
        <h3>Merci, vos informations ont parfaitement été enregistrées</h3>
        <span class="block mt-2 text-blue01">
          Vous serez contacté sous 2 jours.
        </span>
        <span class="block mt-4 text-grey05">
          Très prochainnement, retrouvez sur notre site, une estimation 100%
          automatisée...
        </span>
      </div>
    </div>
    <div
      v-if="showModal"
      class="modal animated fadeIn fixed z-50 w-full h-full mx-auto top-0 left-0 overflow-auto"
    >
      <div class="bg-white w-full md:w-4/6 mx-auto md:mb-8 p-8 md:rounded-b-md">
        <fa-icon
          :icon="['fas', 'times']"
          class="cursor-pointer float-right text-grey08 mr-2 block text-p-sm md:text-p-lg lg:text-p-sm"
          @click="showModal = false"
        />
        <h2 class="pb-8">Conditions générales d'utilisation</h2>
        <h3>1. CGU du site et des services proposés.</h3>
        <span class="block py-3 text-justify">
          L’utilisation du site www.jedivisemonterrain.fr implique l’acceptation
          pleine et entière des conditions générales d’utilisation ci-après
          décrites. Ces conditions d’utilisation sont susceptibles d’être
          modifiées ou complétées à tout moment, les utilisateurs du site
          www.jedivisemonterrain.com sont donc invités à les consulter de
          manière régulière. Ce site est normalement accessible à tout moment
          aux utilisateurs. Une interruption pour raison de maintenance
          technique peut être toutefois décidée par www.jedivisemonterrain.fr ,
          qui s’efforcera alors de communiquer préalablement aux utilisateurs
          les dates et heures de l’intervention. Le site
          www.jedivisemonterrain.com est mis à jour régulièrement par
          jedivisemonterrain. De la même façon, les mentions légales peuvent
          être modifiées à tout moment : elles s’imposent néanmoins à
          l’utilisateur qui est invité à s’y référer le plus souvent possible
          afin d’en prendre connaissance.
        </span>
        <h3 class="pt-6">2. Description des services fournis.</h3>
        <span class="block py-3 text-justify">
          Le site www.jedivisemonterrain.com a pour objet de fournir une
          information concernant l’ensemble des activités de la société.
          jedivisemonterrain s’efforce de fournir sur le site
          www.jedivisemonterrain.com des informations aussi précises que
          possible. Toutefois, il ne pourra être tenue responsable des
          omissions, des inexactitudes et des carences dans la mise à jour,
          qu’elles soient de son fait ou du fait des tiers partenaires qui lui
          fournissent ces informations. Tous les informations indiquées sur le
          site www.jedivisemonterrain.com sont données à titre indicatif, et
          sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant
          sur le site www.jedivisemonterrain.com ne sont pas exhaustifs. Ils
          sont donnés sous réserve de modifications ayant été apportées depuis
          leur mise en ligne.
        </span>
        <h3 class="pt-6">
          3. Limitations contractuelles sur les données techniques.
        </h3>
        <span class="block py-3 text-justify">
          Le site utilise la technologie JavaScript. Le site Internet ne pourra
          être tenu responsable de dommages matériels liés à l’utilisation du
          site. De plus, l’utilisateur du site s’engage à accéder au site en
          utilisant un matériel récent, ne contenant pas de virus et avec un
          navigateur de dernière génération mis-à-jour.
        </span>
        <h3 class="pt-6">4. Propriété intellectuelle et contrefaçons.</h3>
        <span class="block py-3 text-justify">
          jedivisemonterrain est propriétaire des droits de propriété
          intellectuelle ou détient les droits d’usage sur tous les éléments
          accessibles sur le site, notamment les textes, images, graphismes,
          logo, icônes, sons, logiciels. Toute reproduction, représentation,
          modification, publication, adaptation de tout ou partie des éléments
          du site, quel que soit le moyen ou le procédé utilisé, est interdite,
          sauf autorisation écrite préalable de : jedivisemonterrain. Toute
          exploitation non autorisée du site ou de l’un quelconque des éléments
          qu’il contient sera considérée comme constitutive d’une contrefaçon et
          poursuivie conformément aux dispositions des articles L.335-2 et
          suivants du Code de Propriété Intellectuelle.
        </span>
        <h3 class="pt-6">5. Limitations de responsabilité.</h3>
        <span class="block py-3 text-justify">
          jedivisemonterrain ne pourra être tenue responsable des dommages
          directs et indirects causés au matériel de l’utilisateur, lors de
          l’accès au site www.jedivisemonterrain.com, et résultant soit de
          l’utilisation d’un matériel ne répondant pas aux spécifications
          indiquées au point 4, soit de l’apparition d’un bug ou d’une
          incompatibilité. jedivisemonterrain ne pourra également être tenue
          responsable des dommages indirects (tels par exemple qu’une perte de
          marché ou perte d’une chance) consécutifs à l’utilisation du site
          www.jedivisemonterrain.com. Des espaces interactifs (possibilité de
          poser des questions dans l’espace contact) sont à la disposition des
          utilisateurs. jedivisemonterrain se réserve le droit de supprimer,
          sans mise en demeure préalable, tout contenu déposé dans cet espace
          qui contreviendrait à la législation applicable en France, en
          particulier aux dispositions relatives à la protection des données. Le
          cas échéant, jedivisemonterrain se réserve également la possibilité de
          mettre en cause la responsabilité civile et/ou pénale de
          l’utilisateur, notamment en cas de message à caractère raciste,
          injurieux, diffamant, ou pornographique, quel que soit le support
          utilisé (texte, photographie…).
        </span>
        <h3 class="pt-6">6. Gestion des données personnelles.</h3>
        <span class="block py-3 text-justify">
          En France, les données personnelles sont notamment protégées par la
          loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
          l'article L. 226-13 du Code pénal et la Directive Européenne du 24
          octobre 1995. A l'occasion de l'utilisation du site
          www.jedivisemonterrain.com, peuvent êtres recueillies : l'URL des
          liens par l'intermédiaire desquels l'utilisateur a accédé au site
          www.jedivisemonterrain.com, le fournisseur d'accès de l'utilisateur,
          l'adresse de protocole Internet (IP) de l'utilisateur. En tout état de
          cause jedivisemonterrain ne collecte des informations personnelles
          relatives à l'utilisateur que pour le besoin de certains services
          proposés par le site www.jedivisemonterrain.com. L'utilisateur fournit
          ces informations en toute connaissance de cause, notamment lorsqu'il
          procède par lui-même à leur saisie. Il est alors précisé à
          l'utilisateur du site www.jedivisemonterrain.com l’obligation ou non
          de fournir ces informations. Conformément aux dispositions des
          articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à
          l’informatique, aux fichiers et aux libertés, tout utilisateur dispose
          d’un droit d’accès, de rectification et d’opposition aux données
          personnelles le concernant, en effectuant sa demande écrite et signée,
          accompagnée d’une copie du titre d’identité avec signature du
          titulaire de la pièce, en précisant l’adresse à laquelle la réponse
          doit être envoyée. Aucune information personnelle de l'utilisateur du
          site www.jedivisemonterrain.com n'est publiée à l'insu de
          l'utilisateur, échangée, transférée, cédée ou vendue sur un support
          quelconque à des tiers. Seule l'hypothèse du rachat de
          jedivisemonterrain et de ses droits permettrait la transmission des
          dites informations à l'éventuel acquéreur qui serait à son tour tenu
          de la même obligation de conservation et de modification des données
          vis à vis de l'utilisateur du site www.jedivisemonterrain.com. Les
          bases de données sont protégées par les dispositions de la loi du 1er
          juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à
          la protection juridique des bases de données.
        </span>
        <h3 class="pt-6">7. Liens hypertextes et cookies.</h3>
        <span class="block py-3 text-justify">
          Le site www.jedivisemonterrain.com contient un certain nombre de liens
          hypertextes vers d’autres sites, mis en place avec l’autorisation de
          jedivisemonterrain. Cependant, jedivisemonterrain n’a pas la
          possibilité de vérifier le contenu des sites ainsi visités, et
          n’assumera en conséquence aucune responsabilité de ce fait. La
          navigation sur le site www.jedivisemonterrain.com est susceptible de
          provoquer l’installation de cookie(s) sur l’ordinateur de
          l’utilisateur. Un cookie est un fichier de petite taille, qui ne
          permet pas l’identification de l’utilisateur, mais qui enregistre des
          informations relatives à la navigation d’un ordinateur sur un site.
          Les données ainsi obtenues visent à faciliter la navigation ultérieure
          sur le site, et ont également vocation à permettre diverses mesures de
          fréquentation. Le refus d’installation d’un cookie peut entraîner
          l’impossibilité d’accéder à certains services. L’utilisateur peut
          toutefois configurer son ordinateur pour refuser l’installation des
          cookies.
        </span>
        <h3 class="pt-6">8. Droit applicable et attribution de juridiction.</h3>
        <span class="block py-3 text-justify">
          Tout litige en relation avec l’utilisation du site
          www.jedivisemonterrain.com est soumis au droit français. Il est fait
          attribution exclusive de juridiction aux tribunaux compétents de
          Grenoble.
        </span>
        <h3 class="pt-6">9. Les principales lois concernées.</h3>
        <span class="block py-3 text-justify">
          Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n°
          2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux
          libertés. Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
          l'économie numérique.
        </span>
        <h3 class="pt-6">10. Lexique.</h3>
        <span class="block pt-3 text-justify">
          Utilisateur : Internaute se connectant, utilisant le site susnommé.
          Informations personnelles : « les informations qui permettent, sous
          quelque forme que ce soit, directement ou non, l'identification des
          personnes physiques auxquelles elles s'appliquent » (article 4 de la
          loi n° 78-17 du 6 janvier 1978).
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    address: {
      type: Object,
      required: false,
      default: () => {},
    },
    parcelleSelectedInfos: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      loading: false,
      step: 1,
      topographyList: [
        { name: 'Plat', value: 9 },
        { name: 'Pente douce', value: 10 },
        { name: 'Pente moyenne', value: 11 },
        { name: 'Pente forte', value: 12 },
      ],
      typeList: [
        { name: 'Terrain seul', value: 1 },
        { name: 'Maison neuve', value: 2 },
        { name: 'Maison à rafraichir', value: 50 },
        { name: 'Maison à rénover', value: 51 },
        { name: 'Grange', value: 52 },
      ],
      lead: {
        address: {},
        topography: 0, // Renvoi de l'id de la référential value
        type: 0, // Renvoi de l'id de la référential value
        description: '',
        living_space: '',
        garage_surface: '',
        name_pro: '',
        person: {
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          is_pro: false,
        },
        selectedParcels: [] as any,
      },
      files: [] as any,
      cgu: false,
      uploadPercentage: 0,
      showModal: false,
    }
  },
  computed: {
    total(): String {
      let t = 0
      if (this.parcelleSelectedInfos.length > 0) {
        this.parcelleSelectedInfos.forEach((item: any) => {
          t += item.contenance
        })
      }
      return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
  },
  methods: {
    setFiles(files: []) {
      this.files = files
    },
    nextstep() {
      if (this.step === 1) {
        // Validation des infos sur le projet
        if (
          this.lead.topography === 0 ||
          this.lead.type === 0 ||
          this.lead.description === '' ||
          (this.lead.type > 1 &&
            (this.lead.living_space === '' || this.lead.garage_surface === ''))
        ) {
          this.$toast.error("Seul l'envoi de fichier n'est pas obligatoire.", {
            duration: 5000,
          })
        } else {
          this.step = 2
        }
      } else if (this.step === 2) {
        if (
          this.lead.person.first_name === '' ||
          this.lead.person.last_name === '' ||
          this.lead.person.email === '' ||
          this.lead.person.phone === ''
        ) {
          this.$toast.error("L'ensemble des champs doivent être renseignés.", {
            duration: 5000,
          })
        } else if (!this.cgu) {
          this.$toast.error(
            'Vous devez accepter les conditions générales pour continuer.',
            {
              duration: 5000,
            }
          )
        } else {
          this.loading = true

          this.lead.address = {
            street: this.address.properties.name,
            postcode: this.address.properties.postcode,
            citycode: this.address.properties.citycode,
            city: this.address.properties.city,
            housenumber: this.address.properties.housenumber || 0,
            type: this.address.properties.type,
          }
          this.parcelleSelectedInfos.forEach((item: any) => {
            this.lead.selectedParcels.push({
              parcelle_id: item.parcelleId,
              contenance: item.contenance,
            })
          })
          this.$axios
            .post(`${process.env.API_SERVER}/api/lead`, this.lead)
            .then((response: any) => {
              if (this.files.length > 0) {
                const filesToput = new FormData()
                filesToput.append('project_id', response.data.project_id)
                this.files.forEach((file: any) => {
                  filesToput.append('files', file)
                })
                this.$axios
                  .post(
                    `${process.env.API_SERVER}/api/lead_files`,
                    filesToput,
                    {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                    }
                  )
                  .then(() => {
                    this.step = 3
                    this.loading = false
                  })
                  .catch(() => {
                    this.$toast.error(
                      'Une erreur est survenue, veuillez rééssayer utlérieurement.',
                      {
                        duration: 5000,
                      }
                    )
                    this.loading = false
                  })
              } else {
                this.step = 3
                this.loading = false
              }
            })
            .catch(() => {
              this.$toast.error(
                'Une erreur est survenue, veuillez rééssayer utlérieurement.',
                {
                  duration: 5000,
                }
              )
              this.loading = false
            })
        }
      }
    },
  },
})
</script>

<style>
.validated {
  @apply rounded-full;
  @apply w-5;
  @apply h-5;
  @apply bg-blue01;
  @apply absolute;
  @apply -ml-5;
}
.current {
  @apply rounded-full;
  @apply w-5;
  @apply h-5;
  @apply bg-blue01;
  @apply border-blue00;
  @apply border-6;
  @apply border-solid;
  @apply absolute;
  @apply -ml-5;
}
.waiting {
  @apply rounded-full;
  @apply w-5;
  @apply h-5;
  @apply bg-grey03;
  @apply border-white;
  @apply border-6;
  @apply border-solid;
  @apply absolute;
  @apply -ml-5;
}
.modal {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
}
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
</style>
