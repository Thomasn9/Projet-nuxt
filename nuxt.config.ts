// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ["~/assets/app.css"],

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // Configuration de l'application (virgule ajoutée)
  app: {
    head: {
      title: 'Thomas-Nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Description globale de mon site' },
        { name: 'keywords', content: 'nuxt, vue, javascript' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ],
      script: [
        {
          src: 'https://example.com/script.js',
          async: true,
          defer: true
        }
      ]
    }
  }
})