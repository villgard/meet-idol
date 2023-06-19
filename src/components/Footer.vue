<template>
  <footer :class="$style.footer" class="container">
    <Logo :class="$style.logo" />
    <ul :class="$style.list">
      <li v-for="link in links" :key="link.key">
        <a :href="`#${link.to}`">
          {{ link.label }}
        </a>
      </li>
    </ul>
    <ul :class="$style.list">
      <li v-for="link in categories" :key="link.key">
        <span v-if="link.key === 'title'" :class="$style.listTitle">
            {{ link.label }}
        </span>
        <a v-else :href="`#${link.to}`">
          {{ link.label }}
        </a>
      </li>
    </ul>
    <ul :class="$style.list">
      <li :class="$style.title">{{ t('social') }}</li>
      <li :class="$style.social">
        <ul :class="$style.socialList">
          <li v-for="social in socials" :class="$style.socialItem">
            <a :href="social.href" :key="social.key" target="_blank">
              <img :src="`${social.img}.svg`" alt="">
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts" setup>
//@ts-ignore
import Logo from '@/components/Logo.vue';
import { computed } from "vue";
import { useI18N } from "@/hooks/useI18N";

const { t } = useI18N('landing');

const links = computed(() => [
  {
    key: 'athletes',
    label: t('menu.athletes'),
    to: 'athletes',
  },
  {
    key: 'events',
    label: t('menu.events'),
    to: 'events',
  },
  {
    key: 'business',
    label: t('menu.business'),
    to: 'business',
  },
  {
    key: 'howItWork',
    label: t('menu.howItWork'),
    to: 'howItWork',
  },
])
const categories = computed(() => [
  {
    key: 'title',
    label: t('categories.title'),
  },
  {
    key: 'training',
    label: t('categories.training'),
    to: 'training'
  },
  {
    key: 'meeting',
    label: t('categories.meeting'),
    to: 'meeting'
  },
  {
    key: 'vip',
    label: t('categories.vip'),
    to: 'vip'
  },
])
const socials = computed(() => [
  {
    key: 'instagram',
    img: 'instagram',
    href: '#',
  },
  {
    key: 'twitter',
    img: 'twitter',
    href: '#',
  },
  {
    key: 'medium',
    img: 'medium',
    href: '#',
  },
  {
    key: 'telegram',
    img: 'telegram',
    href: '#',
  },
])
</script>

<style lang="scss" module>
.footer {
  padding-top: 40px;
  padding-bottom: 50px;
  border-top: 1px solid #1D1D1F;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;
}

.list {
  font-family: 'RobotoCondensed', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: 24px;
  &:last-child {
    gap: 32px;
  }
}

.listTitle {
  color: #FF4A11;
}

.socialList {
  display: flex;
  gap: 20px;
  max-width: 234px;
  width: 100%;
}

.socialItem {
  max-width: 43px;
}

@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
    gap: 40px;
    border-top: none;
    padding-bottom: 60px;
  }

  .logo {
    margin: 0 auto 38px;
  }
}
</style>