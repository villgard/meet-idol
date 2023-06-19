<template>
  <div :class="$style.switcher">
    <div v-if="localeObject.key === locale" :class="[$style.locale, isOpen && $style.isOpen]" @click="isOpen = !isOpen">
      <svg  width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0.5L5.3995 0.5L10.299 0.5L5.3995 6.3995L0.5 0.5Z" fill="white"/>
      </svg>
      <span>
        {{ localeObject.label }}
      </span>
      <img :src="`/${localeObject.flag}.svg`" alt="">
    </div>
      <div v-for="localeObj in localeObjects" :key="localeObj.key" @click="changeLocale(localeObj.key)" :class="$style.locales">
        <div v-if="isOpen && localeObj.key !== locale" :class="$style.locale" >
          <span>
            {{ localeObj.label }}
          </span>
          <img :src="`/${localeObj.flag}.svg`" :alt="localeObj.label">
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18N } from "@/hooks/useI18N";
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const { locale } = useI18n();
const { setLocale, localeObjects, localeObject } = useI18N();

const isOpen = ref<boolean>(false);


function changeLocale(key) {
  setLocale(key);
  isOpen.value = false;
}
</script>

<style lang="scss" module>

.switcher {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 7px;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  color: #FFFFFF;
}

.locales {
  position: absolute;
  bottom: -100%;
  display: flex;
  flex-direction: column;
}

.locale {
  padding: 9px 0 10px;
  display: flex;
  align-items: center;
  gap: 7px;
}

.isOpen {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: #7C7D7D;
  }
}

</style>

