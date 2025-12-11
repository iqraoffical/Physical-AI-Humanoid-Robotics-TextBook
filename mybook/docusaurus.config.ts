

// export default config;
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

<<<<<<< HEAD
const isVercel = process.env.VERCEL === '1';
// Use '/' on Vercel (or when deploying to custom domain root)
// Keep repo name for GitHub Pages
const baseUrl = isVercel
  ? '/'
  : '/Physical-AI-Humanoid-Robotics-TextBook/';

=======
>>>>>>> 4dd6f2fa8a4bd1c594c937b3b0f623ffadb62d02
const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A Complete Textbook',
  favicon: 'img/favicon.ico',

<<<<<<< HEAD
  // Set your main site URL (change if you use custom domain)
  url: 'https://physical-ai.com', // ← Change to your actual domain or keep GitHub Pages URL
  baseUrl,
  trailingSlash: true, // ← Critical for Vercel + static export

  // GitHub Pages deployment info (only needed if deploying there)
=======
  future: {
    v4: true,
  },

  // ------------------------------
  // 🔥 Your GitHub Pages Settings
  // ------------------------------
  url: 'https://iqraoffical.github.io',
  baseUrl: '/Physical-AI-Humanoid-Robotics-TextBook',
>>>>>>> 4dd6f2fa8a4bd1c594c937b3b0f623ffadb62d02
  organizationName: 'iqraoffical',
  projectName: 'Physical-AI-Humanoid-Robotics-TextBook',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
<<<<<<< HEAD

  future: {
    v4: true,
  },
=======
>>>>>>> 4dd6f2fa8a4bd1c594c937b3b0f623ffadb62d02

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/iqraoffical/Physical-AI-Humanoid-Robotics-TextBook/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/iqraoffical/Physical-AI-Humanoid-Robotics-TextBook/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Humanoid Robotics',
      logo: {
<<<<<<< HEAD
        alt: 'Physical AI Logo',
=======
        alt: 'Logo',
>>>>>>> 4dd6f2fa8a4bd1c594c937b3b0f623ffadb62d02
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/iqraoffical/Physical-AI-Humanoid-Robotics-TextBook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/iqraoffical/Physical-AI-Humanoid-Robotics-TextBook/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
<<<<<<< HEAD
            { label: 'Blog', to: '/blog' },
=======
            {label: 'Blog', to: '/blog'},
>>>>>>> 4dd6f2fa8a4bd1c594c937b3b0f623ffadb62d02
            {
              label: 'GitHub',
              href: 'https://github.com/iqraoffical/Physical-AI-Humanoid-Robotics-TextBook',
            },
          ],
        },
      ],
<<<<<<< HEAD
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook`,
=======
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI TextBook`,
>>>>>>> 4dd6f2fa8a4bd1c594c937b3b0f623ffadb62d02
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;