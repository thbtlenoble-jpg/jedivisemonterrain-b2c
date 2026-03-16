<template>
  <footer>
    <!-- Top -->
    <div
      class="bg-white my-10 mx-auto w-5/6 md:w-3/6 lg:w-2/6 px-4 md:px-8 lg:py-8"
    >
      <h3 class="font-extrabold">Prêt à vous lancer ?</h3>
      <p class="py-3 md:text-span-md"></p>
      <nuxt-link
        to="/"
        class="border-grey06 text-grey06 table transition duration-200 ease-in-out uppercase cursor-pointer border text-button-sm md:text-button-md lg:text-h4-md xl:text-span-md px-3 md:px-5 py-2 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 rounded-md"
      >
        Commencer mon Estimation gratuite
      </nuxt-link>
    </div>
    <!-- Bottom -->
    <div class="bg-grey07 flex flex-col half-width text-grey04 text-center">
      <ul class="pt-10 hidden lg:block">
        <li class="px-2 inline">
          <nuxt-link to="/how" class="text-p-sm xl:text-p-lg"
            >Comment ça marche ?</nuxt-link
          >
        </li>
        <li class="px-2 inline">
          <nuxt-link to="/notre-reseau-d-expert" class="text-p-sm xl:text-p-lg"
            >Notre réseau d'expert</nuxt-link
          >
        </li>
        <!-- FIX : lien corrigé /us au lieu de /notre-reseau-d-expert -->
        <li class="px-2 inline">
          <nuxt-link to="/us" class="text-p-sm xl:text-p-lg"
            >Qui sommes-nous ?</nuxt-link
          >
        </li>
        <li class="px-2 inline">
          <nuxt-link to="/" class="text-p-sm xl:text-p-lg"
            >Estimation gratuite</nuxt-link
          >
        </li>
      </ul>

      <ul
        class="flex justify-around mx-auto pt-5 pb-4 lg:pt-8 lg:pb-6 text-p-xl xl:text-h1-sm"
      >
        <li class="px-3">
          <a
            href="https://www.facebook.com/jedivisemonterrain"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <fa-icon :icon="['fab', 'facebook-square']" />
          </a>
        </li>
        <li class="px-3">
          <a
            href="https://www.instagram.com/jedivisemonterrain/?hl=fr"
            rel="noreferrer"
            target="_blank"
            aria-label="Instagram"
          >
            <fa-icon :icon="['fab', 'instagram-square']" />
          </a>
        </li>
        <li class="px-3">
          <a
            href="https://www.linkedin.com/company/jedivisemonterrain/"
            rel="noreferrer"
            target="_blank"
            aria-label="Linkedin"
          >
            <fa-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
      </ul>

      <span class="pb-1 text-p-sm xl:text-p-lg">
        <nuxt-link to="/legales">Mentions légales</nuxt-link>
      </span>
      <!-- FIX : copyright mis à jour -->
      <span class="pb-6 text-p-sm lg:pb-10 xl:text-p-lg">
        © {{ currentYear }} - Jedivisemonterrain
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
  computed: {
    currentYear(): number {
      return new Date().getFullYear()
    },
  },
}
</script>
