import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Wup's Simple Blog",
  description: "目前啥也没写的一个个人兴趣Blog",
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        i18nRouting: true,
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '主页', link: '/' },
          {
            text: '语法示例',
            items: [
              { text: 'Markdown示例', link: '/markdown-examples' },
              { text: '运行时API示例', link: '/api-examples' }
            ]
          }
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
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        i18nRouting: true,
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'ホーム', link: '/ja/' },
          {
            text: '構文例',
            items: [
              { text: 'Markdown使用例', link: './markdown-examples' },
              { text: 'ランタイムAPI使用例', link: './api-examples' }
            ]
          }
        ],

        sidebar: [
          {
            text: '構文例',
            items: [
              { text: 'Markdown使用例', link: './markdown-examples' },
              { text: 'ランタイムAPI使用例', link: './api-examples' }
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
    }
  }

})
