import React from 'react';
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Masrud Mubarok',
  tagline: 'With a Ninja-Inspired Learning Approach 🚀',
  favicon: 'img/devlite.png',

  url: 'https://masrudmubarok.my.id',
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
        async: 'true',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3468535792953225',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-3468535792953225",
          enable_page_level_ads: true
        });
      `,
    },
  ],

  themeConfig: {
    image: 'img/devlite.png',
    navbar: {
      title: 'DEVLITE',
      logo: {
        alt: 'DEVLITE Logo',
        src: 'img/devlite.png',
      },
      items: [
        {
          to: '/#main',
          label: 'Main',
          activeBaseRegex: '/#main',
          position: 'right',
        },
        {
          to: '/#about',
          label: 'About',
          activeBaseRegex: '/#about',
          position: 'right',
        },
        {
          to: '/#service',
          label: 'Service',
          activeBaseRegex: '/#service',
          position: 'right',
        },
        {
          to: '/#portfolio',
          label: 'Portfolio',
          activeBaseRegex: '/#',
          position: 'right',
        },
      ]
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Devlite. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
    },
  },
};

export default config;