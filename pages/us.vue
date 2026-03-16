<template>
  <div>
    <!-- Top -->
    <div
      class="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-8 px-4 md:py-12 lg:py-20 xl:py-24 md:px-8"
    >
      <h1 class="md:w-5/6">Qui sommes-nous ?</h1>
      <div class="py-3 md:w-5/6">
        <p>
          Une équipe passionnée pour révéler le vrai potentiel de votre bien.
        </p>
      </div>
    </div>

    <div class="bg-grey01">
      <div
        class="md:justify-between md:flex md:flex-wrap lg:max-w-screen-lg xl:max-w-screen-xl mx-auto lg:px-8 xl:px-12 lg:pb-20 pt-10 overflow-hidden"
      >
        <div
          v-for="(person, index) in persons"
          :key="index"
          class="md:w-2/4 lg:my-5 px-4 md:px-8 mb-10 clear-both overflow-hidden"
        >
          <img
            class="float-left w-4/12 mr-4 lg:mr-8 rounded-lg"
            :src="person.img"
            alt=""
          />
          <div class="flex flex-col">
            <h3 class="font-bold text-grey07">{{ person.name }}</h3>
            <p class="text-blue01">{{ person.role }}</p>
            <span class="text-grey05 block">
              {{ person.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// export default Vue.extend({})
export default {
  name: 'UsPage',
  data() {
    return {
      persons: [
        {
          name: 'Florent POTIGNON',
          role: 'Président / Co-fondateur',
          img: 'img/us/florent.jpg',
          description:
            'Que ce soit en marathon ou dans l’entreprenariat, Florent est infatigable et n’arrête jamais de courir vers de nouvelles idées ! L’aménagement foncier n’a plus aucun secret pour lui, c’est un véritable expert en division parcellaire et projets collectifs.',
        },
        {
          name: 'Olivier BOYER',
          role: 'Directeur général / Co-fondateur',
          img: 'img/us/olivier.jpg',
          description:
            'Si la course à pied n’est pas la passion d’Olivier, dans la course à l’idée, il n’a rien à envier à son associé. Ensemble, ils font la paire ! Tous deux ingénieurs génie industriel, Olivier se passionne pour la digitalisation du marché de l’immobilier.',
        },
        {
          name: 'Stéphane LOTITO',
          role: 'CPO',
          img: 'img/us/stephane.jpg',
          description:
            "S’il n’a pas encore trouvé la formule pour transformer l’eau en bière, Stéphane est un passionné d’UX design et de développement informatique. Avec une affinité particulière pour le front-end la création graphique c'est un vrai magicien en CSS HTML, on peut s’attendre à tout ! ",
        },
        {
          name: 'Jérémy Chaudourne',
          role: 'CTO',
          img: 'img/us/jeremy.jpg',
          description:
            'Avec une passion pour les données, les statistiques et une dévotion à résoudre les casse-tête les plus complexes – vous pouvez appeler Jérémy le roi des geeks ! Dans son temps libre, Jérémy adore la musique électronique. Si jamais nous nous retrouvions tous en prison pour télécharger des Mp3, il espère qu’on sera séparé par style de musique et qu’il se retrouvera dans la zone « techno ».',
        },
        {
          name: 'Partick CARLE',
          role: 'Directeur développement foncier',
          img: 'img/us/patrick.jpg',
          description:
            'Incollable dans le domaine de la promotion immobilière, Patrick est notre encyclopédie personnelle. Toujours prêt à donner des bons conseils grâce à ses 18 ans d’expériences dans le développement foncier, c’est notre directeur opérationnel.',
        },
        {
          name: 'Victoria MARTINEZ',
          role: 'Responsable des ventes',
          img: 'img/us/victoria.jpg',
          description:
            "Femme de challenge, c'est avec sa ténacité et son dynamisme olympique que Victoria est toujours prête à relever les défit commerciaux.",
        },
        {
          name: 'Gina VELEZ',
          role: 'Responsable aménagement foncier',
          img: 'img/us/gina.jpg',
          description:
            'C’est zen et décontractée que Gina aborde son métier d’architecte et la conception de projet. Originaire de Colombie, elle aura de l’énergie à revendre pour mener à bien vos projets.',
        },
      ],
    }
  },
  head: {
    title: 'Qui sommes-nous ?',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Equipe de je divise mon terrain',
      },
    ],
  },
}
</script>
