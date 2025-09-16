// @ts-check
import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PIMS Knowledge Base",
  tagline: "Resources for PIMS",
  favicon: "img/favicon.ico",
  url: "https://pimskb.vercel.app",
  baseUrl: "/",
  organizationName: "PDE",
  trailingSlash: false,
  projectName: "pimsKB",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  staticDirectories: ["static", "data"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@orama/plugin-docusaurus-v3",
      {
        searchbox: {
          placeholder: "Search...",
        },
        searchButton: {
          text: "Search",
        },
        resultMap: {
          title: "name",
          description: "content",
          section: "category",
        },
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          { tagName: "link", rel: "icon", href: "/img/pimsKbLogo.png" },
          { tagName: "link", rel: "manifest", href: "/manifest.json" },
          { tagName: "meta", name: "theme-color", content: "#262626" },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
        ],
      },
    ],
  ],
  // Using Orama for local full‑text search

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "#EEEEF0",
          dark: "#313131",
        },
        config: {},
      },
      image: "img/pimskb-social-card.png",
      navbar: {
        logo: {
          alt: "pimsKB Logo",
          src: "img/pimskb-logo-light.png",
          srcDark: "/img/pimskb-logo-dark.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "Manual",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "howToGuides",
            label: "How-to Guides",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "dqeRules",
            label: "DQE Rules",
          },
        ],
      },
      scrollToTop: true,
      scrollToTopOptions: { smooth: true, offset: 100 },
      footer: {
        style: "light",
        logo: {
          alt: "Agency Image",
          src: "/img/pde-blue1.png",
          srcDark: "/img/pde-white1.png",
          href: "https://www.education.pa.gov",
        },
        copyright: `Copyright © ${new Date().getFullYear()}  Commonwealth of Pennsylvania. All rights reserved.`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
