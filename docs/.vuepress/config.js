import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  base: '/yubot-docs/',
  title: '羽bot',
  description: '文档',
  head: [
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-MZCWWQJQQT' }],
    [
      'script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-MZCWWQJQQT');
      `
    ],
  ],
})

