<template>
  <div class="w-full bg-white">
    <!-- Navbar -->
    <div
      class="relative py-1 md:py-3 lg:py-4 xl:py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 border-b"
    >
      <nav class="relative flex items-center justify-between sm:h-10">
        <!-- Logo -->
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full">
            <nuxt-link to="/">
              <img
                class="h-6 w-auto md:h-8 xl:h-10"
                src="/logo.svg"
                alt="Logo"
              />
            </nuxt-link>
          </div>
        </div>
        <!-- Links -->
        <div class="flex items-center">
          <!-- Navigation -->
          <div class="hidden lg:block">
            <nuxt-link
              to="/how"
              class="mr-2 text-span-lg lg:text-span-md xl:text-span-xl pb-6 pt-6 xl:pt-8 xl:pb-8 lg:mr-4 xl:mr-8 text-black"
              active-class="active"
            >
              Comment ça marche ?
            </nuxt-link>
            <nuxt-link
              to="/notre-reseau-d-expert"
              class="mx-2 text-span-lg lg:text-span-md xl:text-span-xl pb-6 pt-6 xl:pt-8 xl:pb-8 lg:mx-4 xl:mx-8 text-black"
              active-class="active"
            >
              Notre réseau d'experts
            </nuxt-link>
            <nuxt-link
              to="/us"
              class="mx-2 text-span-lg lg:text-span-md xl:text-span-xl pb-6 pt-6 xl:pt-8 xl:pb-8 lg:mx-4 xl:mx-8 text-black"
              active-class="active"
            >
              Qui sommes-nous ?
            </nuxt-link>
          </div>
          <!-- Estimation button -->
          <nuxt-link
            to="/#"
            class="hover:text-blue01 hidden md:block ml-4 text-grey08 border-solid border border-grey04 transition duration-200 ease-in-out uppercase cursor-pointer border text-button-sm md:text-button-md lg:text-h4-md xl:text-span-md px-3 md:px-5 py-2 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 rounded-md"
          >
            ESTIMATION GRATUITE
          </nuxt-link>
          <!-- Hamburger -->
          <div
            class="text-right text-h2-sm ml-8 lg:hidden text-grey06 cursor-pointer"
          >
            <fa-icon :icon="['fas', 'bars']" @click="open = !open" />
          </div>
        </div>
      </nav>
    </div>

    <!-- Navbar (Mobile) -->
    <div
      class="navBar bg-blackOpacity20 fixed left-100 w-full bottom-0 top-0 inset-y-0 lg:hidden"
      :class="{
        'right-0 left-auto': open,
      }"
    >
      <div
        class="bg-white w-3/4 md:w-2/4 absolute top-0 bottom-0 right-0 overflow-hidden"
        role="menu"
      >
        <div class="text-right text-h2-sm m-2 px-5 text-grey06 cursor-pointer">
          <fa-icon :icon="['fas', 'times']" @click="open = !open" />
        </div>
        <div class="px-8 pt-10 pb-10 text-p-lg">
          <nuxt-link
            to="/how"
            class="mt-10 block"
            role="menuitem"
            active-class="text-blue01"
          >
            <span class="text-p-lg" @click="open = !open">
              Comment ça marche ?
            </span>
          </nuxt-link>
          <nuxt-link
            to="/notre-reseau-d-expert"
            class="mt-10 block"
            role="menuitem"
            active-class="text-blue01"
          >
            <span class="text-p-lg" @click="open = !open">
              Notre réseau d'experts
            </span>
          </nuxt-link>
          <nuxt-link
            to="/us"
            class="mt-10 block"
            role="menuitem"
            active-class="text-blue01"
          >
            <span class="text-p-lg" @click="open = !open">
              Qui sommes-nous ?
            </span>
          </nuxt-link>
        </div>
        <div class="absolute bottom-0 right-0 left-0">
          <div class="text-center text-grey04 text-h2-sm mb-8">
            <a
              href="https://www.facebook.com/jedivisemonterrain"
              rel="noreferrer"
              target="_blank"
              aria-label="Facebook"
              class="px-2"
            >
              <fa-icon
                :icon="['fab', 'facebook-square']"
                @click="open = !open"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/jedivisemonterrain/"
              rel="noreferrer"
              target="_blank"
              aria-label="Linkedin"
              class="px-2"
            >
              <fa-icon :icon="['fab', 'linkedin']" @click="open = !open" />
            </a>
            <a
              href="https://www.instagram.com/jedivisemonterrain/?hl=fr"
              rel="noreferrer"
              target="_blank"
              aria-label="Instagram"
              class="px-2"
            >
              <fa-icon
                :icon="['fab', 'instagram-square']"
                @click="open = !open"
              />
            </a>
          </div>
          <div class="text-grey03 text-span-lg text-center mb-8">
            <a rel="noreferrer" href="" target="_blank" class="px-2 block mb-4"
              >Mentions légales</a
            >
            <span class="text-span-lg">© 2020 - Jedivisemonterrain</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style scoped>
.link {
  @apply mt-1;
  @apply block;
  @apply px-3;
  @apply py-2;
  @apply rounded-md;
  @apply text-grey06;
}

.active {
  @apply text-blue01;
  @apply border-b-3;
  @apply border-blue01;
}
</style>
