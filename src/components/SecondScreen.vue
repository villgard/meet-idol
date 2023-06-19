<template>
<section :class="$style.secondScreen">
  <div :class="$style.content" class="container">
    <h2 :class="[$style.title, isRussian && $style.isRussian]">
      <span>{{ t('title.0') }}</span>
      <span>{{ t('title.1') }}</span>
    </h2>
    <ul :class="$style.list">
      <li :class="$style.item" v-for="i in 4" :key="i">
        <h3 :class="[$style.itemTitle, isRussian && $style.isRussian]">
          <span>{{ t(`list.${i-1}.title.0`) }}</span>
          <span>{{ t(`list.${i-1}.title.1`) }}</span>
        </h3>
        <p :class="[$style.itemSubtitle, isRussian && $style.isRussian]">{{ t(`list.${i-1}.subtitle`) }}</p>
      </li>
    </ul>
    <ul :class="$style.thumbnails">
      <li v-for="thumb in isMobile ? 4 : 3" :class="$style.thumb">
        <img :src="`/slide-${thumb}.webp`" alt="photo">
        <span :class="$style.play" v-if="thumb % 2 === 1">
          <svg viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.82926 0.637171L33.3174 24.2897L0.829255 47.9423V24.2897L0.82926 0.637171Z" />
          </svg>
        </span>
      </li>
    </ul>
  </div>
  <div :class="$style.mask"></div>
</section>
</template>

<script lang="ts" setup>
import { useI18N } from "@/hooks/useI18N";
import {useZoomer} from "@/hooks/useZoomer";
import { computed } from "vue";

const { viewport } = useZoomer();
const { t, isRussian } = useI18N('landing.secondScreen');

const isMobile = computed(() => viewport === 375);
</script>

<style lang="scss" module>
@import 'src/ui/assets/mixins';

.secondScreen {
  position: relative;
  padding-top: 90px;
  padding-bottom: 120px;
  background-image: url("/second-bg.webp");
  background-size: 100vw 1116px;
  background-repeat: no-repeat;
}
.content {
  position: relative;
  z-index: 5;
}
.mask {
  position: absolute;
  top: 0;
  width: 100%;
  max-height: 1116px;
  height: 100%;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 75%, #000000 100%);
  z-index: 4;
}

.title {
  @include h2;
  line-height: 1;
  text-align: center;
  margin-bottom: 70px;
  span {
    display: block;

    &:last-child {
      @include redColor;
    }
  }
  &.isRussian {
    @include h2-ru;
  }
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 124px;
}

.item {
  position: relative;
  width: 305px;
  height: 188px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: #1D1D1F;
    transform: skew(-6.07deg);
  }
  .itemTitle.isRussian {
    text-align: center;
    max-width: 214px;
  }

  &:last-child {
    .itemSubtitle.isRussian {
      max-width: 152px;
    }
  }
}

.itemTitle {
  @include h5;
  margin-bottom: 10px;
  span {
    &:last-child {
      @include redColor;
    }
  }
  &.isRussian {
    @include h5-ru;
  }
}

.itemSubtitle {
  font-family: 'RobotoCondensed', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  color: #FFFFFF;
  text-align: center;
}

.thumbnails {
  height: 628px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 140px;
}

.thumb {
  position: relative;
  max-width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: -32px;
    left: -10px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 16.53%, #7E7E7E 100%);
    width: 355px;
    height: 180px;
    transform:  rotate(-5.8deg) skew(-30deg);
  }
  &:nth-child(even) {
    &::before {
      height: 210px;
      width: 420px;
    }
  }
  img {
    border-radius: 20px;
  }
  &:hover {
    .play {
      opacity: 1;
      svg {
        fill-opacity: .8;
      }
      &::before {
        border-color: #D20A0A;
      }
    }
  }
}

.play {
  position: absolute;
  width: 105px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1.70674px solid rgba(210, 10, 10, 0.5);
    transform: skew(-11deg);
  }

  svg {
    fill: #D20A0A;
    fill-opacity: .4;
    width: 34px;
    height: 48px;
  }

}

@media screen and (max-width: 768px) {
  .thumbnails {
    height: auto;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: initial;
    align-items: flex-start;
  }

  .thumb {
    max-width: 126px;
    max-height: 211px;
    width: 100%;
    height: 100%;

    img {
      border-radius: 9px;
      width: 100%;
      object-fit: cover;
    }

    &:nth-child(even) {
      margin-top: 85px;
    }


    &:nth-child(even)::before,
    &::before {
      width: 140px;
      height: 77px;
      bottom: -10px;
      left: 0;
      transform: rotate(-5.8deg) skew(-24deg);
    }
  }

  .secondScreen {
    padding-top: 60px;
    padding-bottom: 60px;
    background-size: contain;
    background-image: url("/second-bg-mobile.webp");
  }

  .title {
    margin-bottom: 40px;
    font-size: 77px;
  }

  .list {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
  }

  .mask {
    max-height: 1103px;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, #000000 100%);;
  }


  .item {
    width: 318px;
    height: 112px;

    &::before {
      transform: skew(-10.13deg);
    }

    &:last-child {
      .itemSubtitle.isRussian {
        max-width: 142px;
      }
    }
    .itemTitle.isRussian {
      max-width: 100%;
    }
  }

  .itemTitle {
    font-size: 40px;
    line-height: 1;
  }

  .itemSubtitle {
    font-size: 14px;
    line-height: 16px;
  }

  .play {
    width: 46px;
    height: 38px;

    &::before {
      border: 0.7441px solid rgba(210, 10, 10, 0.5);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>