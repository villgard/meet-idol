<template>
  <nav :class="[$style.menu, isOpenMenu && $style.openedMenu]">
    <ul :class="$style.list">
      <li v-for="item in menuList" :key="item.key" :class="[$style.item]">
        <span v-if="item.subMenu" :class="$style.withSubmenu" @click="isShow = !isShow">
          <div :class="$style.item">
            {{ item.label }}
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 8.57104L0.723479 0.705431L7 2.29454L13.2765 0.70543L7 8.57104Z" fill="#D20A0A"/>
            </svg>
          </div>

          <ul v-if="item.subMenu && isShow" :class="$style.subMenu">
            <li v-for="subItem in item.subMenu" :key="subItem.key" :class="[$style.item, $style.subItem]">
              <a :href="`#${subItem?.to}`">
                {{ subItem.label }}
              </a>
            </li>
          </ul>
        </span>
        <a v-else :href="`#${item.to}`">
            {{ item.label }}
          </a>
      </li>
    </ul>
    <LanguageSwitcher />
  </nav>
</template>

<script lang="ts" setup>
import {computed, ComputedRef, ref} from "vue";
import {useI18N} from "@/hooks/useI18N";
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

type MenuItem = {
  key: string;
  label: string;
  to?: string;
  subMenu?: MenuItem;
}

defineProps({
  isOpenMenu: Boolean,
});

const { t } = useI18N('landing.menu');

const isShow = ref<boolean>(false);



const menuList = computed<MenuItem[]>(() => [
  {
    key: 'sport',
    label: t('sport'),
    subMenu: [
      {
        key: 'ufc',
        label: t('subMenu.ufc'),
        to: 'ufc',
      },
      {
        key: 'tennis',
        label: t('subMenu.tennis'),
        to: 'tennis',
      },
      {
        key: 'golf',
        label: t('subMenu.golf'),
        to: 'golf',
      },
    ],
  },
  {
    key: 'athletes',
    label: t('athletes'),
    to: 'athletes',
  },
  {
    key: 'events',
    label: t('events'),
    to: 'events',
  },
  {
    key: 'business',
    label: t('business'),
    to: 'business',
  },
  {
    key: 'howItWork',
    label: t('howItWork'),
    to: 'howItWork',
  },
])
</script>

<style lang="scss" module>

.menu {
  max-width: 1065px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list {
  max-width: 720px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.item {
  font-family: 'RobotoCondensed', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 6px;

}

.withSubmenu {
}

.subMenu {
  position: absolute;
  top: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.withSubmenu {
  position: relative;
  cursor: pointer;
}

.subItem {
  color: #919191;
}

@media screen and (max-width: 768px) {
  .menu {
    max-width: 100%;
    height: 100vh;
    position: fixed;
    right: -100%;
    padding-top: 115px;
    padding-bottom: 50px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;
    background-color: #010101;
    z-index: 15;
    &.openedMenu {
      overflow-y: auto;
      inset: 0;
      top: -22px;
    }
  }
  .list {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .subMenu {
    position: static;
    padding-top: 40px;
  }
  .withSubmenu {
    flex-direction: column;
  }
}

</style>