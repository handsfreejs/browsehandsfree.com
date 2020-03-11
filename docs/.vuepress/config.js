module.exports = {
  title: 'BrowseHandsfree.com',
  description:
    'Learn how to browse the web handsfree with our Handsfree Chrome Extension or create your own experiences with our library, Handsfree.js 👋',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=UA-160252285-1' }],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/canvas-confetti@0.5.0/dist/confetti.browser.min.js'
      }
    ],
    ['script', { src: 'https://unpkg.com/handsfree@7.0.3/dist/handsfree.js' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/handsfree@7.0.3/dist/handsfree.css'
      }
    ]
  ],

  plugins: [['vuepress-plugin-seo']],

  extend: '@vuepress/theme-default',
  themeConfig: {
    logo: '/favicon.png',
    lastUpdated: 'Last Updated',

    author: { name: 'Oz Ramos', twitter: '@checkboxoz' },
    domain: 'https://browsehandsfree.com',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reference', link: '/reference/' }
    ],

    sidebar: [
      '/',
      {
        title: 'Reference',
        path: '/reference/',
        collapsable: false,
        children: [
          '/reference/',
          '/reference/config/',
          '/reference/head/',
          '/reference/body/',
          '/reference/plugins/',
          '/reference/methods/',
          '/reference/classes/',
          '/reference/properties/',
          '/reference/events/',
          '/reference/calibrating/',
          '/reference/client-mode/'
        ]
      }
    ]
  }
}
