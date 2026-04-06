import { defineConfig } from "vitepress";
import shared from "./locales/shared";
import zh from "./locales/zh";
import ja from "./locales/ja";

// VitePress 配置
// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  //多语言配置
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zh
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      ...ja
    }
  },
})
