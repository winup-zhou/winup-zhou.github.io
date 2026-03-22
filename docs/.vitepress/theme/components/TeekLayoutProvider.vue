<script setup lang="ts">
import Teek, { zhCn, en } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { computed } from "vue";
import ja from "../locale/ja";

const { lang } = useData();

const locale = computed(() => {
  if (lang.value === "zh") return zhCn;
  else if (lang.value === "ja") return ja;
  else return en;
});
</script>

<template>
  <Teek.Layout :locale />
</template>