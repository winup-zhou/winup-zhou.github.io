//Teek Theme
import Teek, { teekConfigContext } from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
// @ts-expect-error side-effect css import provided by vite bundling
import "vitepress-theme-teek/index.css";


//config
export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
};