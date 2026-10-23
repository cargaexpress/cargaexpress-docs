import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CargaExpress Supply Chain',
  tagline: 'Shipment visibility, carrier integration, and logistics operations',
  favicon: 'img/cargaexpress_favicon.svg',

  future: { v4: true },

  url: 'https://cargaexpress.github.io',
  baseUrl: '/cargaexpress-docs/',
  organizationName: 'cargaexpress',
  projectName: 'cargaexpress-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/cargaexpress/cargaexpress-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo_cargaexpresss.png',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'CargaExpress',
      logo: {
        alt: 'CargaExpress',
        src: 'img/cargaexpress_favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/cargaexpress/cargaexpress-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Project overview', to: '/docs/intro' },
            { label: 'Sprint plan', to: '/docs/sprints/sprint-overview' },
          ],
        },
        {
          title: 'Repository',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cargaexpress/cargaexpress-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CargaExpress. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
