<template>
<section :class="$style.FAQ" id="faq">
  <div :class="$style.wrapper" class="container">
    <h2 :class="[$style.title, isRussian && $style.isRussian]">
      <span>
        {{ t('title') }}
      </span>
    </h2>
    <ul :class="$style.list">
      <FAQItem
          v-for="item in isMobile ? 7 : 5"
          :key="item"
          :question="t(`list.${item - 1}.question`)"
          :answer="t(`list.${item - 1}.answer`)"
      />
    </ul>
  </div>
  <div :class="$style.mask"></div>
  <Footer />
</section>
</template>

<script lang="ts" setup>
//@ts-ignore
import { useI18N } from "@/hooks/useI18N";
import { ref, computed } from "vue";
import FAQItem from './FAQItem.vue';
import Footer from '@/components/Footer.vue';
import { useZoomer } from "@/hooks/useZoomer";

const { t, isRussian } = useI18N('landing.faq');
const { viewport } = useZoomer();

const items = ref(7);
const isMobile = computed(() => viewport === 375);
</script>

<style lang="scss" module>
@import "@/ui/assets/mixins.scss";

.FAQ {
  padding-top: 120px;
  background-image: url("/faq-bg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(-180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,.4) 80%, rgba(0,0,0,1) 100%);
  z-index: 4;
}

.wrapper {
  position: relative;
  padding-bottom: 210px;
  z-index: 5;
}

.title {
  position: relative;
  margin-bottom: 34px;
  padding-left: 25px;
  font-family: 'SCHABO', sans-serif;
  font-size: 44px;
  font-weight: 400;
  line-height: 53px;

  span {
    position: relative;
    z-index: 5;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 72px;
    height: 21px;
    left: 4px;
    background: linear-gradient(90deg, #FF4A11 0%, rgba(0, 0, 0, 0) 150.64%);
    z-index: 1;
    transform: skew(16deg);
  }

  &.isRussian {
    font-family: 'RobotoCondensed', sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 52px;
  }
}

.list {
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media screen and (max-width: 768px) {
  .FAQ {
    padding-top: 60px;
    background-image: url("/faq-bg-mobile.webp");
    background-size: contain;
    background-position: bottom 646px center;
  }

  .wrapper {
    padding-bottom: 200px;
  }
  .list {
    gap: 12px;
  }
}
</style>