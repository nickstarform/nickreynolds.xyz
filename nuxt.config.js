// import colors
import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nickreynolds.xyz',
    title: 'N R T',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'nickstarform -- protostar finder',
      },
      /* Twitter */
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@astrotranre' },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@astrotranre',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'nickreynolds.xyz',
      },
      { hid: 'twitter:image', name: 'twitter:image', content: '/favicon.png' },
      /* Open-Graph */
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'nickreynolds.xyz',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'nickstarform -- protostar finder',
      },
      { hid: 'og:image', name: 'og:image', content: '/favicon.png' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/lotus.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/variables.scss',
    '@/assets/mixins.scss',
  ],
  styleResources: {
    scss: ['@/assets/variables.scss', '@/assets/mixins.scss'],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/util'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-speedkit',
    '@nuxtjs/sitemap',
    'nuxt-purgecss',
    '@nuxt/image'
  ],
  sitemap: {
    // !STARTERCONF Change the siteUrl
    /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
    siteUrl: 'https://nickreynolds.xyz',
    hostname: 'https://nickreynolds.xyz',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
    gzip: true,
    exclude: [
      '/store',
    ],
    routes: [],
  },
  axios: {
    // proxy: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeshake: true,
    customProperties: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // speedkit: a tool to score 100% in lighthouse
  // https://nuxt-speedkit.grabarzundpartner.dev/
  speedkit: {
    detection: {
      performance: true,
      browserSupport: true,
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
      lighthouseDetectionByUserAgent: false,
    },
    componentAutoImport: false,
    componentPrefix: undefined,
    lazyOffset: {
      component: '0%',
      asset: '0%',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
