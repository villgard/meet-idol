<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useZoomer } from "@/hooks/useZoomer";
import {useI18n} from "vue-i18n";

const { viewport, zoom } = useZoomer();
const { locale } = useI18n();

onMounted(() => {
  const meta = document.head.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `width=${viewport}, user-scalable=no`);
  //@ts-ignore
  document.documentElement.style.zoom = zoom;
  document.documentElement.setAttribute('lang', locale.value);
});
</script>

<style lang="scss" module>
</style>
