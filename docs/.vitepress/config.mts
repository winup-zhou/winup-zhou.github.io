import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "Wup's Simple Blog",
  description: "目前啥也没写的一个个人兴趣Blog",
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  lastUpdated: true,

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
            text: 'BVE Train Sim',
            items: [
              { text: '补丁', link: '/bve/patchs' },
              { text: '插件', link: '/bve/plugins' }
            ]
          },
          { text: 'Minecraft', link: '/mc' }
        ],

        sidebar: [
          {
            text: 'BVE Train Sim',
            items: [
              {
                text: '补丁',
                items: [
                  {
                    text: 'vertah 東武车辆<br>定速+TASC/ATO全功能',
                    link: '/bve/patchs/tobu-vehicle-ato-tasc'
                  }, {
                    text: 'vertah 05系11-13次车 B修',
                    link: '/bve/patchs/trta05-ato-tasc'
                  }, {
                    text: 'vertah 08系 B修',
                    link: '/bve/patchs/trta08-ato-tasc'
                  }
                ],
                link: '/bve/patchs'
              },
              {
                text: '插件',
                items: [
                  {
                    text: 'MetroAts<br>地下铁直通系统ATC/S',
                    link: '/bve/plugins/metroats'
                  }, {
                    text: 'TGMT-CBTC-EX<br>基于AtsEX的移动闭塞插件',
                    link: '/bve/plugins/tgmt-cbtc-ex'
                  }
                ],
                link: '/bve/plugins'
              }
            ]
          },
          { text: 'Minecraft', link: '/mc' }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        i18nRouting: true,
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'ホーム', link: '/ja' },
          {
            text: 'BVE Train Sim',
            items: [
              { text: 'パッチ', link: '/ja/bve/patchs' },
              { text: 'プラグイン', link: '/ja/bve/plugins' }
            ]
          },
          { text: 'Minecraft', link: '/ja/mc' }
        ],

        sidebar: [
          {
            text: 'BVE Train Sim',
            items: [
              {
                text: 'パッチ',
                items: [
                  {
                    text: 'vertah 東武車両<br>定速＋TASC／ATO全機能',
                    link: '/ja/bve/patchs/tobu-vehicle-ato-tasc'
                  },
                  {
                    text: 'vertah 05系11-13次車 B修',
                    link: '/ja/bve/patchs/trta05-ato-tasc'
                  },
                  {
                    text: 'vertah 08系 B修',
                    link: '/ja/bve/patchs/trta08-ato-tasc'
                  }
                ],
                link: '/ja/bve/patchs'
              },
              {
                text: 'プラグイン',
                items: [
                  {
                    text: 'MetroAts<br>地下鉄直通システムATC／S',
                    link: '/ja/bve/plugins/metroats'
                  },
                  {
                    text: 'TGMT-CBTC-EX<br>AtsEXベースの移動閉塞プラグイン',
                    link: '/ja/bve/plugins/tgmt-cbtc-ex'
                  }
                ],
                link: '/ja/bve/plugins'
              }
            ]
          },
          { text: 'Minecraft', link: '/ja/mc' }
        ]
      }
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    i18nRouting: true,

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
