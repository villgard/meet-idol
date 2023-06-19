<template>
  <section :class="$style.howItWork" class="container" id="howItWork">
    <h2 :class="[$style.title, isRussian && $style.isRussian]">{{ t('title')}}</h2>
    <ul :class="$style.list">
      <li v-for="step in 3" :key="step" :class="[$style.item, isRussian && $style.isRussian]">
        <p :class="$style.label">
          {{ t('step', { n: step })}}
        </p>
        <h3 :class="[$style.info, isRussian && $style.isRussian]">
          {{t(`list.${step - 1}`)}}
        </h3>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { useI18N } from "@/hooks/useI18N";

const { t, isRussian } = useI18N('landing.howItWork');
</script>

<style lang="scss" module>
@import "src/ui/assets/mixins";

.howItWork {
  padding-top: 120px;
}

.title {
  @include h2;
  margin-bottom: 60px;
  text-align: center;

  &.isRussian {
    @include h2-ru;
  }
}

.list {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
}

.item {
  position: relative;
  height: 288px;
  max-width: 400px;
  width: 100%;
  padding: 49px 30px 0;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: #1D1D1F;
    transform: skew(-8deg);
  }
}

.label {
  font-family: 'SCHABO', sans-serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;
  color: #A70909;
}

.info {
  @include h4;
  margin-top: 21px;

  &.isRussian {
    font-family: 'SofiaSansCondensed', sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 43px;
    text-align: center;
    margin: 30px auto 0;
  }
}

@media screen and (max-width: 768px) {
  .howItWork {
    padding-top: 60px;
  }
  .title {
    font-size: 84px;
    margin-bottom: 40px;
  }
  .list {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .item {
    height: 112px;
    padding-top: 23px;
    &.isRussian {
      &:last-child {
        height: 182px;

        .info {
          max-width: 152px;
        }
      }
    }
  }

  .label {
    font-size: 18px;
    line-height: 21px;
  }

  .info {
    font-size: 24px;
    line-height: 29px;
    margin-top: 10px;
    &.isRussian {
      font-size: 24px;
      line-height: 29px;
      margin-top: 10px;
    }
  }
}
</style>