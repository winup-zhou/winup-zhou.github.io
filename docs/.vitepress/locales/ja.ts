// .vitepress/locales/ja.ts

import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
    loading: "迷子でもいい、迷子でも進め。",
    themeEnhance: {
        themeColor: {
            disableHelp: true,
            customize: true, // 是否启用自定义主题组
            append: [
                {
                    label: "It's MyGO!!!!!", // 主题组名称
                    tip: "MyGOのテーマカラー切り替え", // 主题组提示信息，鼠标悬停时显示
                    options: [
                        { label: "バンドアイコン", value: "band", color: "#3388bb" },
                        { label: "愛音", value: "anon", color: "#ff8899" },
                        { label: "そよ", value: "soyo", color: "#ffdd88" },
                        { label: "燈", value: "tomori", color: "#77bbdd" },
                        { label: "立希", value: "taki", color: "#7777aa" },
                        { label: "楽奈", value: "rana", color: "#77dd77" },
                    ],
                },
            ],
        },
    },
    friendLink: {
        title: "リンク集"
    },
    docAnalysis: {
        title: "サイト情報",
    },
    category: {
        pageTitle: "すべてのカテゴリ",
        homeTitle: "記事カテゴリ",
        moreLabel: "その他 ...",
        emptyLabel: "記事のカテゴリはありません"
    },
    topArticle: {
        title: "精選記事",
        emptyLabel: "精選記事はまだありません"
    }
});

export default defineConfig({
    // コンテナのデフォルトタイトルを変更
    markdown: {
        // 开启行号
        lineNumbers: true,
        image: {
            // 默认禁用；设置为 true 可为所有图片启用懒加载。
            lazyLoading: true,
        },
        container: {
            tipLabel: "ヒント",
            warningLabel: "警告",
            dangerLabel: "危険",
            infoLabel: "情報",
            detailsLabel: "詳細情報",
        },
    },  
    themeConfig: {
        ...teekConfig.themeConfig,
        description: "ブログ建設中...",
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "ホーム", link: "/ja/" },
            {
                text: "BVE TrainSim",
                items: [
                    { text: "パッチ", link: "/bve/patches" },
                    { text: "プラグイン", link: "/bve/plugins" }
                ]
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/winup-zhou" },
            { icon: "bilibili", link: "https://space.bilibili.com/248556377" },
            { icon: "x", link: "https://x.com/wup99925510" }
        ],
        docFooter: {
            prev: "前ページへ",
            next: "次ページへ"
        },
        outline: {
            label: "ページ内ナビゲーション"
        },
        notFound: {
            title: "ページが迷子になりました",
            quote: "迷子でもいい、迷子でも進め。",
            linkLabel: "ホームページへ",
            linkText: "トップページに戻る"
        },
        lastUpdated: {
            text: "最終更新日"
        },
        returnToTopLabel: "トップに戻る",
        sidebarMenuLabel: "メニュー",
        darkModeSwitchLabel: "テーマ",
        lightModeSwitchTitle: "ライトモードに切り替える",
        darkModeSwitchTitle: "ダークモードに切り替える",
        skipToContentLabel: "コンテンツへジャンプ"
    },  
});