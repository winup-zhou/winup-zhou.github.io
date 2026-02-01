<script setup lang="ts">
import Teek, { zhCn, en } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { computed } from "vue";
import ja from "../locale/ja";

const { lang } = useData();

const locale = computed(() => {
  if (lang.value === "zh-CN") return zhCn;
  else if (lang.value === "ja-JP") return ja;
  else return en;
});
</script>

<template>
  <Teek.Layout :locale />
</template>