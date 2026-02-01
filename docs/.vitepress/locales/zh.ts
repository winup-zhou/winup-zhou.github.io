// .vitepress/locales/zh.ts

import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
    loading: "不畏迷茫，迷茫着也要砥砺前行。",
    themeEnhance: {
        themeColor: {
            customize: true, // 是否启用自定义主题组
            append: [
                {
                    label: "It's MyGO!!!!!", // 主题组名称
                    tip: "MyGO主题色切换", // 主题组提示信息，鼠标悬停时显示
                    options: [
                        { label: "团标", value: "band", color: "#3388bb" },
                        { label: "爱音", value: "anon", color: "#ff8899" },
                        { label: "爽世", value: "soyo", color: "#ffdd88" },
                        { label: "灯", value: "tomori", color: "#77bbdd" },
                        { label: "立希", value: "taki", color: "#7777aa" },
                        { label: "乐奈", value: "rana", color: "#77dd77" },
                    ],
                },
            ],
        },
    },
});

export default defineConfig({
    themeConfig: {
        ...teekConfig.themeConfig,
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'BVE Train Sim',
                items: [
                    { text: '补丁', link: '/bve/patches' },
                    { text: '插件', link: '/bve/plugins' }
                ]
            },
            { text: '教程', link: '/tutorials' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/winup-zhou' },
            { icon: 'bilibili', link: 'https://space.bilibili.com/248556377' },
            { icon: 'x', link: 'https://x.com/wup99925510' }
        ],
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            label: '页面导航'
        },
        notFound: {
            title: '页面迷路了',
            quote: '不畏迷茫，迷茫着也要砥砺前行。',
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
});
