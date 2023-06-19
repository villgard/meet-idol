<template>
  <div :class="[$style.logo, isHeader && $style.isHeader]">
    <img :src="`/${isHeader ? 'logo' : 'logo-sec'}.svg`" alt="MEET IDOL">
  </div>
</template>

<script lang="ts" setup>

defineProps({
  isHeader: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" module>

.logo {
  max-width: 218px;

  img {
    width: 100%;
    display: block;
  }
}

.isHeader {
  max-width: 130px;
  position: relative;
  z-index: 20;
}
</style>