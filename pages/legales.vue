<template>
  <div>
    <!-- Top -->
    <div
      class="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-8 px-4 md:py-12 lg:py-20 xl:py-24 md:px-8"
    >
      <h1>MENTIONS LÉGALES</h1>
      <div class="py-3">
        <p>
          En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l'économie numérique, il est précisé aux utilisateurs
          du site www.jedivisemonterrain.fr l'identité des différents
          intervenants dans le cadre de son suivi.<br />
        </p>
      </div>
    </div>
    <div class="bg-grey01">
      <div class="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div class="px-4 md:px-8 py-8">
          <span>
            <strong>Propriétaire</strong> : ALTALIS - SIRET : 835 185 067 00013
            – 162 Avenue Jean Jaures, 38320 Eybens<br />
            <strong>Responsable publication</strong> : Florent POTIGNON –
            contact@jedivisemonterrain.fr<br />
            Le responsable publication est une personne physique ou une personne
            morale.<br />
            <strong>Webmaster</strong> : Stéphane LOTITO –
            info@jedivisemonterrain.fr<br />
            <strong>Hébergeur</strong> : Vercel Inc. 340 S Lemon Ave #4133 -
            Walnut, CA 91789
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MentionsLegales',
  head: {
    title: 'Mentions Légales',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Mentions légales',
      },
    ],
  },
}
</script>
