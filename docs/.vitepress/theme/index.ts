import type { Theme } from 'vitepress'

//Teek Theme
import Teek, { teekConfigContext } from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";

//config
export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
}satisfies Theme