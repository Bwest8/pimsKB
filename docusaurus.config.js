// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PIMS Knowledge Base',
  tagline: 'Resources for PIMS',
  favicon: 'img/favicon.ico',
  url: 'https://bwest8.github.io/',
  baseUrl: '/',
  organizationName: 'PDE',
  trailingSlash: false,
  projectName: 'pimsKB',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pimsKbLogo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#262626',
          },
        ],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [
            remarkMath,
            () => (ast) => {
              ast.children.forEach((node) => {
                if (node.type === 'text' && node.value.includes('{date:')) {
                  const dateKey = node.value.match(/{date:(\w+)}/)[1];
                  node.type = 'jsx';
                  node.value = `<DateInsert date="${dateKey}" />`;
                }
              });
            },
          ],
          rehypePlugins: [rehypeKatex],
          editUrl: 'https://github.com/Bwest8/pimsKB/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Bwest8/pimsKB/tree/master/blog/',
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
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Manual',
          },
          {to: '/blog', label: 'How-To Guides', position: 'left'},
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
          src: '/img/pde-blue.png',
          srcDark: '/img/pde-white.png',
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