// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PIMS Knowledge Base',
  tagline: 'Resources for PIMS',
  favicon: 'img/favicon.ico',
  url: 'https://bwest8.github.io/',
  baseUrl: '/pimsKB/',
  organizationName: 'PDE',
  trailingSlash: false,
  projectName: 'pimsKB',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [require.resolve('docusaurus-lunr-search')],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            'https://github.com/Bwest8/pimsKB/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Bwest8/pimsKB/tree/master/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'PIMS KB',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Bwest8/pimsKB',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Agency Image',
          src: 'https://www.education.pa.gov/Style%20Library/Agency/img/logos/pde-blue.png',
          href: 'https://www.education.pa.gov',
        },
        links: [
          {
            title: 'Affiliates',
            items: [
              {
                label: 'Office of Commonwealth Libraries',
                to: 'https://www.statelibrary.pa.gov/Pages/default.aspx',
              },
              {
                label: 'Professional Standards and Practices Commission',
                to: 'https://www.pspc.education.pa.gov/Pages/default.aspx',
              },
              {
                label: 'State Board of Education',
                to: 'https://www.stateboard.education.pa.gov/Pages/default.aspx',
              },
            ],
          },
          {
            title: 'Social Links',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/PADepartmentofEducation/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/PADeptofEd',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/PADeptofEd',
              },
              {
                label: 'Pinterest',
                href: 'https://www.pinterest.com/PADeptOfEd/',
              },
              {
                label: 'Blog',
                href: 'https://www.education.pa.gov/SchoolofThought/Pages/Blog.aspx',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Bwest8/pimsKB',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  Commonwealth of Pennsylvania. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;