<template>
<section :class="$style.athletes" class="container" id="athletes">
  <h2 :class="[$style.title, isRussian && $style.isRussian]">{{ t('athletes.title') }}</h2>
  <ul :class="$style.list">
    <li v-for="item in athletes" :key="item.key" :class="$style.item">
      <div :class="$style.thumbnail">
        <img :src="`${item.img}.webp`" alt="item.label">
      </div>
      <h3 :class="[$style.name, isRussian && $style.isRussian]">{{ item.label }}</h3>
      <div :class="$style.info">
        <p :class="$style.weight">{{ item.weight }}</p>
        <p v-if="!isMobile" :class="$style.caption">
          <span>
            {{ t('categories.training')}}
            <span :class="$style.price">{{ item.training}}</span>
          </span>
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.707107" y="5" width="4.85783" height="4.85783" transform="rotate(-45 0.707107 5)" stroke="#D20A0A"/>
          </svg>
          <span>
            {{ t('categories.meeting') }}
            <span :class="$style.price">{{ item.meeting }}</span>
          </span>
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.707107" y="5" width="4.85783" height="4.85783" transform="rotate(-45 0.707107 5)" stroke="#D20A0A"/>
          </svg>
          <span>
            {{ t('categories.vip2') }}
            <span :class="$style.price">{{ item.vip }}</span>
          </span>
        </p>
        <Button :label="t('bookButton')" variant="outlined" :class="$style.bookButton" :is-mobile="isMobile"/>
      </div>
    </li>
  </ul>
  <p :class="$style.showAll">{{ t('athletes.showAll') }}</p>
</section>
</template>

<script lang="ts" setup>
//@ts-ignore
import { useI18N } from "@/hooks/useI18N";
import Button from '@/ui/Button/Button.vue';
import {computed} from "vue";
import {useZoomer} from "@/hooks/useZoomer";

const { viewport } = useZoomer();
const { t, isRussian } = useI18N('landing');

const isMobile = computed(() => viewport === 375);
const athletes = computed(() => [
  {
    key: 'rustam',
    label: t('athletes.list.0'),
    img: 'rustam',
    weight: t('athletes.division.lightweight'),
    training: t('athletes.from', { n: 500 }),
    meeting: t('athletes.from', { n: 500 }),
    vip: t('athletes.from', { n: 500 }),
  },
  {
    key: 'islam',
    label: t('athletes.list.1'),
    img: 'islam',
    weight: t('athletes.division.lightweight'),
    training: t('athletes.from', { n: 500 }),
    meeting: t('athletes.from', { n: 500 }),
    vip: t('athletes.from', { n: 500 }),
  },
  {
    key: 'umar',
    label: t('athletes.list.2'),
    img: 'umar',
    weight: t('athletes.division.lightweight'),
    training: t('athletes.from', { n: 500 }),
    meeting: t('athletes.from', { n: 500 }),
    vip: t('athletes.from', { n: 500 }),
  },
  {
    key: 'abas',
    label: t('athletes.list.3'),
    img: 'abas',
    weight: t('athletes.division.lightweight'),
    training: t('athletes.from', { n: 500 }),
    meeting: t('athletes.from', { n: 500 }),
    vip: t('athletes.from', { n: 500 }),
  },
  {
    key: 'abubakar',
    label: t('athletes.list.4'),
    img: 'abubakar',
    weight: t('athletes.division.lightweight'),
    training: t('athletes.from', { n: 500 }),
    meeting: t('athletes.from', { n: 500 }),
    vip: t('athletes.from', { n: 500 }),
  },
  {
    key: 'makhmud',
    label: t('athletes.list.5'),
    img: 'makhmud',
    weight: t('athletes.division.lightweight'),
    training: t('athletes.from', { n: 500 }),
    meeting: t('athletes.from', { n: 500 }),
    vip: t('athletes.from', { n: 500 }),
  },
]);
</script>

<style lang="scss" module>
@import "src/ui/assets/mixins";

.athletes {
  padding-top: 190px;
}

.title {
  position: relative;
  @include h2;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -58px;
    width: 419px;
    height: 548px;
    background: linear-gradient(180deg, #D20A0A 0%, rgba(0, 0, 0, 0) 100%);
    mix-blend-mode: lighten;
    transform: skew(-32deg) translateX(70px);
  }

  &.isRussian {
    @include h2-ru;
  }
}


.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.item {
  flex: 1 0 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 560px;
  height: 100%;
  padding-bottom: 30px;
  &::before {
    content: '';
    position: absolute;
    width: 374px;
    height: 428px;
    bottom: 0;
    z-index: -1;
    background: #1D1D1F;
    backdrop-filter: blur(100px);
    border-radius: 2px;
    transform: skew(8.3deg);
  }
  &::after {
    content: '';
    position: absolute;
    width: 415px;
    height: 45px;
    bottom: 260px;
    z-index: -1;
    background: linear-gradient(90deg, #7E7E7E 4.03%, rgba(0, 0, 0, 0) 99.54%);
    transform: skew(9deg);
  }
}

.info {
  position: absolute;
  bottom: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.name {
  margin: 0 auto;
  max-width: 315px;
  position: absolute;
  bottom: 240px;
  z-index: 5;
  white-space: pre-wrap;
  font-family: 'SCHABO', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 60px;
  text-align: center;

  &.isRussian {
    font-family: 'SofiaSansCondensed', sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    bottom: 252px;
  }
}

.thumbnail {
  position: absolute;
  top: 0;
  z-index: 1;
  max-width: 241px;
  img {
    width: 100%;
  }
}

.weight {
  margin: 23px auto 30px;
  font-family: 'RobotoCondensed', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #7E7E7E;
}

.caption {
  max-width: 318px;
  width: 100%;
  margin-bottom: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 7px;
  row-gap: 14px;
  font-family: 'RobotoCondensed', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #FFFFFF;
}

.price {
  color: #7E7E7E;
}

.showAll {
  margin-top: 60px;
  font-family: 'RobotoCondensed', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
}


@media screen and (max-width: 768px) {
  .athletes {
    padding-top: 90px;
  }

  .title {
    margin-bottom: 20px;
    font-size: 84px;
    &::before {
      top: -18px;
      right: 50%;
      width: 158px;
      height: 206px;
      transform: skew(-32deg) translateX(50%);
    }
  }

  .list {
    flex-direction: column;
    gap: 20px;
  }

  .item {
    min-height: 382px;
    padding-bottom: 40px;
    &::before {
      width: 315px;
      height: 280px;
      backdrop-filter: blur(76.3968px);
      border-radius: 1.52794px;
      transform: skew(8.3deg);
    }
    &::after {
      width: 322px;
      height: 35px;
      bottom: 153px;
      left: -2px;
      z-index: -1;
    }
  }

  .thumbnail {
    max-width: 185px;
    max-height: 195px;
  }

  .name {
    font-size: 45px;
    bottom: 144px;

    &.isRussian {
      bottom: 140px;
      text-transform: capitalize;
    }
  }

  .showAll {
    margin-top: 30px;
  }
}
</style>