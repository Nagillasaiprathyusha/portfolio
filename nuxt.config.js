export default {
  // Disable server-side rendering
  ssr: false,

  // Static target
  target: 'static',

  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  //router: {
    //middleware: ['simple'] // Ensure this matches your middleware filename
  //},

  http: {
    baseURL: '/' // Set your base URL here
  },

  build: {},
  compatibilityDate: '2024-09-23'
};
