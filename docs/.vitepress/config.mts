import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wup's Simple Blog",
  description: "目前啥也没写的一个个人兴趣Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '语法示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '语法示例',
        items: [
          { text: 'Markdown示例', link: '/markdown-examples' },
          { text: '运行时API示例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/winup-zhou' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/248556377' },
      { icon: 'x', link: 'https://x.com/wup99925510' }
    ],

    footer: {
      message: 'Powered by <a href="https://github.com/vuejs/vitepress">Vitepress</a>.',
      copyright: 'Copyright © 2025-present <a href="https://github.com/winup-zhou">Win_Update</a>'
    }
  }
})
