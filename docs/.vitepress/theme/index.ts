//Teek Theme
import Teek, { teekConfigContext } from "vitepress-theme-teek";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import "vitepress-theme-teek/index.css";


//config
export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
};