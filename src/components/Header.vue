<template>
  <header :class="$style.header" class="container">
    <Logo is-header />
    <Menu :is-open-menu="openMenu" />
    <div :class="[$style.menuSwitcher, openMenu && $style.isOpen]" @click="openMenu = !openMenu">
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Logo from '@/components/Logo.vue';
import Menu from '@/components/Menu.vue';
import {ref, watchEffect} from "vue";


const openMenu = ref<boolean>(false);

watchEffect(() => {
  openMenu.value ? document.body.style.overflow = 'hidden' : document.body.removeAttribute('style');
})
</script>

<style lang="scss" module>

.header {
  position: absolute;
  z-index: 20;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menuSwitcher {
  display: none;
}

@media screen and (max-width: 768px) {
  .menuSwitcher {
    width: 39px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    position: relative;
    z-index: 20;
    transition: all .3s ease;
    span {
      position: absolute;
      width: 100%;
      height: 6px;

      &::before {
        content: '';
        position: absolute;
        width: 37px;
        height: 6px;
        inset: 0;
        background: #D20A0A;
        transform: skew(18.4deg);
      }

      &:first-child {
        top: 0;
      }
      &:last-child {
        bottom: 0;
      }
    }
  }
  .isOpen {
    span {
      &:first-child {
        transform: rotate(-45deg);
        bottom: 50%;
      }
      &:last-child {
        transform: rotate(45deg);
        bottom: 50%;
      }
    }
  }
}
</style>