//Teek Theme
import Teek, { teekConfigContext } from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import "vitepress-theme-teek/index.css";

// 1. 基础与全局样式 (Global & Base)
import "vitepress-theme-teek/theme-chalk/tk-table.css";           // 表格样式
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css";      // 引用块样式
import "vitepress-theme-teek/theme-chalk/tk-mark.css";            // 标记样式

// 2. 导航栏组件 (Navigation)
import "vitepress-theme-teek/theme-chalk/tk-nav-search-button.css";             // 导航栏组合样式
import "vitepress-theme-teek/theme-chalk/tk-nav-translation.css";             // 导航栏组合样式

// 3. 布局与容器 (Layout & Container)
import "vitepress-theme-teek/theme-chalk/tk-container-left.css";  // 容器左侧
import "vitepress-theme-teek/theme-chalk/tk-container.css";       // 容器主样式

// 4. 侧边栏与目录 (Sidebar & Aside)
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";         // 侧边栏
import "vitepress-theme-teek/theme-chalk/tk-aside.css";           // 右侧目录栏

// 5. 文档内容与特效 (Content & Effects)
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css"; // 代码块移动端
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css";     // 文章淡入


//config
export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
};