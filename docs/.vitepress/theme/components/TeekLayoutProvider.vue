<script setup lang="ts">
import Teek, { zhCn, en } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { computed } from "vue";
import jaJp from "../locale/ja-JP";

const { lang } = useData();

const locale = computed(() => {
  if (lang.value === "zh-CN") return zhCn;
  else if (lang.value === "ja-JP") return jaJp;
  return en;
});
</script>

<template>
  <Teek.Layout :locale />
</template>