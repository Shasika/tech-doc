import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { viteBundler } from '@vuepress/bundler-vite'


export default defineUserConfig({
  lang: 'en-US',
  title: 'Tech Docs',
  description: 'Documentation site',
  base: '/tech-doc/',

  theme: hopeTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Git', link: '/git/' },
    ],
    sidebar: 'structure',
    sidebarDepth: 2,
  }),

  bundler: viteBundler(),
})
