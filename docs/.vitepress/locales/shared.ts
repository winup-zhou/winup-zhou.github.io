import { defineConfig } from "vitepress";
import { searchOptionsI18n } from '../search-options-i18n';
import { defineTeekConfig } from "vitepress-theme-teek/config";


// Teek 主题配置
const teekConfig = defineTeekConfig({
    teekTheme: true,
    teekHome: true,
    sidebarTrigger: true,
    viewTransition: {
        enabled: true, // 是否启用深浅色切换动画效果
        mode: "out-in", // 动画模式，out 始终从点击点往全屏扩散，out-in 第一次从点击点往全屏扩散，再次点击从全屏回到点击点
        duration: 300, // 动画持续时间，当 mode 为 out 时，默认为 300ms，mode 为 out-in 时，默认为 600ms
        easing: "ease-in", // 缓动函数
    },
    windowTransition: true,
    post: {
        postStyle: "list", // 文章列表风格
        showCapture: false, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
        splitSeparator: false, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
        transition: true, // 是否开启过渡动画
    },
    author: {
        name: "Win_Update",
    },
    footerInfo: {
        // 主题版权配置
        theme: {
            show: true, // 是否显示主题版权，建议显示
        },
        // 博客版权配置
        copyright: {
            show: true, // 是否显示博客版权
            createYear: 2025, // 创建年份
            suffix: "Win_Update", // 后缀
        },
    },
    wallpaper: {
        enabled: true, // 是否启用壁纸模式
        hideBanner: false, // 开启壁纸模式后，是否隐藏 Banner
        hideMask: false, // 开启壁纸模式后，是否隐藏 Banner 或 bodyBgImage 的遮罩层，则确保 banner.mask 和 bodyBgImage.mask 为 true 才生效
    },
    toComment: {
        enabled: false, // 是否启动滚动到评论区功能
    },
    riskLink: {
        enabled: true,
    },
    docAnalysis: {
        enabled: true, // 是否启用站点信息卡片
        createTime: "2025-06-09", // 站点创建时间
        wordCount: true, // 是否开启文章页的字数统计
        readingTime: true, // 是否开启文章页的阅读时长统计
    },
    vitePlugins: {
        sidebarOption: {
            localeRootDir: "zh",
        },
    }
});

export default defineConfig({
    extends: teekConfig,
    lang: 'zh-Hans',
    title: "Wup's Blog",
    description: "博客建设中...",
    head: [['link', { rel: 'icon', href: '/logo.svg' }]],
    lastUpdated: true,
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
    //路径重写（zh写到根）
    rewrites: {
        "zh/:rest*": ":rest*",
    },
    cleanUrls: true,
    markdown: {
        // 开启行号
        lineNumbers: true,
        image: {
            // 默认禁用；设置为 true 可为所有图片启用懒加载。
            lazyLoading: true,
        },
    },
});