import { themes as prismThemes } from 'prism-react-renderer';
import { FaGithub, FaYoutube } from 'react-icons/fa';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mastering Software Development',
  tagline: 'Like a Ninja: Fast, Fierce, Unstoppable 🚀',
  favicon: 'img/devlite.png',

  url: 'https://masrudmubarok.github.io',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./config/sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3468535792953225', // Ganti dengan client ID Anda
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'script',
      innerHTML: `
        (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-3468535792953225", // Ganti dengan ID AdSense Anda
          enable_page_level_ads: true
        });
      `,
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'genin',
        path: 'handbook/genin',
        routeBasePath: 'handbook/genin',
        sidebarPath: require.resolve('./config/sidebarsGenin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'chunin',
        path: 'handbook/chunin',
        routeBasePath: 'handbook/chunin',
        sidebarPath: require.resolve('./config/sidebarsChunin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'jounin',
        path: 'handbook/jounin',
        routeBasePath: 'handbook/jounin',
        sidebarPath: require.resolve('./config/sidebarsJounin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sannin',
        path: 'handbook/sannin',
        routeBasePath: 'handbook/sannin',
        sidebarPath: require.resolve('./config/sidebarsSannin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kage',
        path: 'handbook/kage',
        routeBasePath: 'handbook/kage',
        sidebarPath: require.resolve('./config/sidebarsKage.js'),
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: ({
    image: 'img/devlite.png',
    navbar: {
      title: 'DEVLITE',
      logo: {
        alt: 'My Site Logo',
        src: 'img/devlite.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Handbook',
          position: 'right',
          items: [
            {
              to: 'handbook/genin/intro',
              label: 'Genin',
              activeBaseRegex: '/genin/',
            },
            {
              to: 'handbook/chunin/intro',
              label: 'Chunin',
              activeBaseRegex: '/chunin/',
            },
            {
              to: 'handbook/jounin/intro',
              label: 'Jounin',
              activeBaseRegex: '/jounin/',
            },
            {
              to: 'handbook/sannin/intro',
              label: 'Sannin',
              activeBaseRegex: '/sannin/',
            },
            {
              to: 'handbook/kage/intro',
              label: 'Kage',
              activeBaseRegex: '/kage/',
            },
          ],
        },
        {
          to: '/#roadmap',
          label: 'Roadmap',
          activeBaseRegex: '/#roadmap',
          position: 'right',
        },
        {
          to: '/#about',
          label: 'About',
          activeBaseRegex: '/#about',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark', // Bisa 'light' atau 'dark'
      copyright: `© ${new Date().getFullYear()} Devlite. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;