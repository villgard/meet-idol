<template>
<section :class="$style.mainScreen" class="container">
  <div :class="$style.content">
    <div :class="$style.stars">
      <img v-for="i in 5" :key="i" src="/star.svg" alt="star">
    </div>
    <h1 :class="[$style.title, isRussian && $style.isRussian]">
      <span>{{ t('mainScreen.title.0') }}</span>
      <span>{{ t('mainScreen.title.1') }}</span>
    </h1>
    <p :class="[$style.subtitle, isRussian && $style.isRussian]">
      {{ t('mainScreen.subtitle') }}
    </p>
    <Button :label="t('bookButton')" />
  </div>
  <div :class="$style.brands">
    <span :class="$style.brand">
      <img src="/forbes-logo.svg" alt="Forbes">
    </span>
    <span :class="$style.brand">
      <img src="/independent-logo.webp" alt="The Independent">
    </span>
    <span :class="$style.brand">
      <img src="/talk-sport-logo.svg" alt="Talk Sport">
    </span>
    <span :class="$style.brand">
      <img src="/ufc-logo.svg" alt="UFC">
    </span>
    <span :class="$style.brand">
      <img src="/as-logo.svg" alt="AS">
    </span>


  </div>

  <div :class="$style.mask"></div>
</section>
</template>

<script lang="ts" setup>
import { useI18N } from "@/hooks/useI18N";
import Button from '@/ui/Button/Button.vue';
import {computed} from "vue";

const { t, isRussian } = useI18N('landing');

</script>

<style lang="scss" module>
@import 'src/ui/assets/mixins';

.mainScreen {
  position: relative;
  max-width: 100%;
  width: 100%;
  min-height: 826px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-image: url("/main-bg.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;


  &::before,
  &::after {
    content: '';
    position: absolute;
    background: linear-gradient(180deg, #7E7E7E 25.75%, rgba(0, 0, 0, 0) 100%);
    mix-blend-mode: lighten;
    z-index: 2;
  }
  &::before {
    top: 77px;
    left: -503px;
    width: 509px;
    height: 738px;
    transform: skewX(24.8deg);
  }
  &::after {
    top: -18px;
    right: -340px;
    width: 426px;
    height: 548px;
    transform: skewX(32.2deg);
  }
}

.mask {
  position: absolute;
  z-index: 1;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0,0,0, 0) 50%, rgba(0,0,0,1) 100%);
}


.content {
  width: 100%;
  min-height: 826px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 173px;
  z-index: 10;
}

.stars {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  max-height: 75px;
  margin-bottom: 20px;
}

.title {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 17px;

  font-family: 'SCHABO', sans-serif;
  font-weight: 400;
  font-size: 180px;
  line-height: 216px;
  color: #FFFFFF;
  span {
    &:nth-child(2) {
      @include redColor;
      opacity: .6;
    }
  }

  &.isRussian {
    gap: 20px;
    @include h2-ru;
  }
}

.subtitle {
  margin-bottom: 30px;
  font-family: 'RobotoCondensed', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: #FFFFFF;
  text-transform: uppercase;
  text-align: center;
}

.brands {
  position: relative;
  bottom: 75px;
  z-index: 5;
  max-height: 47px;
  max-width: 1028px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.brand {
  max-width: max-content;
  img {
    width: 100%;
  }
  &:first-child {
    img {
      max-width: 107px;
    }
  }
  &:nth-child(2) {
    max-width: 230px;
  }
}

@media screen and (max-width: 768px) {

  .mainScreen {
    min-height: auto;

    &::before,
    &::after {
      width: 0;
      height: 0;
      display: none;
    }
  }
  .title {
    flex-direction: column;
    align-items: center;
    font-size: 105px;
    line-height: 1.1;
    gap: 0;
    span {
      &:nth-child(2) {
        opacity: 1;
      }
    }

    &.isRussian {
      gap: 0;
    }
  }

  .subtitle {
    margin-top: 20px;
    font-size: 14px;
    line-height: 16px;
    &.isRussian {
      max-width: 296px;
      margin: 20px 0 12px;
      line-height: 20px;
    }
  }
  .stars {
    max-height: 30px;
    gap: 1px;

    img {
      width: 30px;
    }
  }

  .content {
    min-height: 100vh;
    top: 115px;
  }

  .brands {
    bottom: 130px;
  }
}
</style>