import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  head: {
    title: 'Je divise mon terrain | Division parcellaire',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Expert en Division Parcellaire — Gagnez 30% sur la vente de votre bien',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    ],
  },

  css: ['~/assets/main.css'],

  plugins: ['~/plugins/vue-lazysizes.client.js'],

  components: [
    '~/components',
    { path: '~/components/cards/' },
    { path: '~/components/inputs/' },
    { path: '~/components/lead-creation/' },
  ],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
  ],

  tailwindcss: {
    cssPath: '~/assets/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
  },

  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID || '',
    enabled: !!process.env.GOOGLE_TAG_MANAGER_ID,
  },

  sitemap: {
    hostname: 'https://jedivisemonterrain.fr',
  },

  toast: {
    position: 'top-right',
  },

  axios: {},

  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: [
        'faCheck', 'faBars', 'faTimes', 'faRedo', 'faThumbsUp',
        'faChevronRight', 'faChevronLeft', 'faMapMarkerAlt',
        'faSpinner', 'faUpload',
      ],
      regular: ['faCheck', 'faUpload'],
      brands: [
        'faFacebookSquare', 'faTwitterSquare', 'faInstagramSquare',
        'faLinkedin', 'faYoutubeSquare',
      ],
    },
  },

  build: {
    // Fix : exclure mapbox-gl de Babel (trop gros, déjà compilé)
    transpile: [],
    extend(config) {
      config.module = config.module || { rules: [] }
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/mapbox-gl/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false,
          },
        },
      })
    },
  },

  // Mode statique pour Vercel
  target: 'static',

  generate: {
    dir: 'dist',
    fallback: true,
  },

  env: {
    TILE_SERVER:       process.env.TILE_SERVER       || '',
    MAPBOX_ACCESTOKEN: process.env.MAPBOX_ACCESTOKEN || '',
    API_SERVER:        process.env.API_SERVER        || '',
  },
}

export default config
