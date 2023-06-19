<template>
<section :class="$style.banner" class="container">
  <div :class="[$style.wrapper, isRussian && $style.isRussian]">
    <div :class="[$style.content, isRussian && $style.isRussian]">
      <h2 :class="[$style.title, isRussian && $style.isRussian]">{{ t('title')}}</h2>
      <p :class="[$style.subtitle]">{{ t('subtitle') }}</p>
      <div :class="$style.buttons">
        <Button :label="t('buttons.0')" variant="filledWhite" />
        <Button :label="t('buttons.1')" variant="outlinedWhite" />
      </div>
    </div>
    <div :class="[$style.images, isRussian && $style.isRussian]">
      <span :class="$style.image">
        <img src="/banner-1.webp" alt="banner">
      </span>
      <span :class="$style.image">
        <img src="/banner-2.webp" alt="banner">
      </span>
    </div>
  </div>
</section>
</template>

<script lang="ts" setup>
//@ts-ignore
import { useI18N } from "@/hooks/useI18N";
import Button from '@/ui/Button/Button.vue';

const { t, isRussian } = useI18N('landing.banner');

</script>

<style lang="scss" module>
@import "src/ui/assets/mixins";

.banner {
  padding-top: 100px;
}

.wrapper {
  max-width: 1320px;
  width: 100%;
  height: 398px;
  position: relative;
  display: flex;
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    inset: 0;
    background: #D20A0A;
    transform: skew(-5.74deg);
  }
}

.content {
  position: relative;
  z-index: 5;
  padding-top: 60px;
  margin-left: 82px;

  &.isRussian {
    padding-top: 72px;
  }
}

.title {
  max-width: 682px;
  width: 100%;
  @include h3;

  &.isRussian {
    margin-bottom: 20px;
    max-width: 740px;
    @include h3-ru;
  }
}

.subtitle {
  max-width: 505px;
  width: 100%;
  margin-bottom: 40px;
  font-family: 'RobotoCondensed', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: #000000;
}

.buttons {
  display: flex;
  gap: 6px;
}

.images {
  position: absolute;
  right: 110px;
  z-index: 2;
  max-width: 535px;
  width: 100%;
  height: 491px;
  bottom: -1px;
  overflow: hidden;
}

.image {
  position: absolute;
  img {
    width: 100%;
  }
  &:first-child {
    z-index: 3;
  }

  &:last-child {
    z-index: 2;
    right: 0;
    top: 44px;
    transform: rotate(-3.8deg);
  }
}

@media screen and (max-width: 768px) {
  .banner {
    padding-top: 60px;
  }

  .wrapper {
    max-width: 728px;
    height: 557px;
    &::before {
      transform: skew(-4deg);
    }
    &.isRussian {
      height: 527px;
    }
  }
  .content {
    padding-top: 30px;
    margin: 0 auto;

    &.isRussian {
      padding-top: 30px;
    }
  }
  .title {
    font-size: 85px;
    text-align: center;
    &.isRussian {
      margin-bottom: 30px;
    }
  }

  .subtitle {
    max-width: 254px;
    margin: 10px auto 170px;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }

  .images {
    width: 221px;
    height: 204px;
    bottom: 85px;
    right: 70px;

    &.isRussian {
      bottom: 100px;
    }
  }

  .image {
    &:first-child {
      width: 155px;
      height: 204px;
    }
    &:last-child {
      width: 115px;
      height: 148px;
      top: 18px;
      right: 4px;
    }
  }

  .buttons {
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
}
</style>