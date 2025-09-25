// .vitepress/config.ts

import { defineConfig } from 'vitepress';
import UnoCSS from 'unocss/vite';
import { searchOptionsI18n } from './config/search-options-i18n';
import { zhNav, zhSidebar_bve, zhSidebar_mc } from "./config/zh/zh";
import { jaNav,jaSidebar } from "./config/ja/ja";
import { zhconfig } from "./config/zh/zh.config";
import { jaConfig } from "./config/ja/ja.config";

export default defineConfig({
  lang: 'zh-Hans',
  title: "Wup's Simple Blog",
  description: "目前啥也没写的一个个人兴趣Blog",
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  lastUpdated: true,
  //全局主题配置
  themeConfig: {
    logo: '/logo.svg',
    i18nRouting: true,
    search: {
      provider: 'local',
      options: {
        locales: {
          root: searchOptionsI18n.root,
          ja: searchOptionsI18n.ja,
        }
      }
    }
  },
  //多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        nav:zhNav,
        sidebar: {
          '/bve/': zhSidebar_bve,
          '/mc/': zhSidebar_mc
        },
        ...zhconfig
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: jaNav,
        sidebar: jaSidebar,
        ...jaConfig
      }
    }
  },
  //路径重写（zh写到根）
  rewrites: {
    'zh/:path*': ':path*'
  },
  cleanUrls:true,
  vite: {
    plugins: [
      UnoCSS()
    ]
  },
});
