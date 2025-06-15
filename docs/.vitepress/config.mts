import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite';
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
        ],
        docFooter: {
          prev: false,
          next: false
        },
        outline: {
          label: '页面导航'
        },
        notFound: {
          title: '页面未找到',
          quote:
            '哪怕迷失方向，也要在迷途中前行。',
          linkLabel: '前往首页',
          linkText: '带我回首页'
        },
        lastUpdated: {
          text: '最后更新于'
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
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
        ],
        docFooter: {
          prev: false,
          next: false
        },
        outline: {
          label: 'ページ内ナビゲーション'
        },
        notFound: {
          title: 'ページが見つかりません',
          quote: '迷子でもいい、迷子でも進め。',
          linkLabel: 'ホームページへ',
          linkText: 'トップページに戻る'
        },
        lastUpdated: {
          text: '最終更新日'
        },
        returnToTopLabel: 'トップに戻る',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: 'テーマ',
        lightModeSwitchTitle: 'ライトモードに切り替える',
        darkModeSwitchTitle: 'ダークモードに切り替える',
        skipToContentLabel: 'コンテンツへジャンプ'
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
  },
  vite: {
    plugins: [
      UnoCSS()
    ]
  },

})
