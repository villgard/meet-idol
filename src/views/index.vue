<template>
  <main :class="$style.main">
    <Header />
    <MainScreen />
    <SecondScreen />
    <Banner />
    <Athletes />
    <HowItWork />
    <FAQ/>
  </main>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import MainScreen from '@/components/MainScreen.vue';
import SecondScreen from '@/components/SecondScreen.vue';
import Banner from '@/components/Banner.vue';
import Athletes from '@/components/Athletes.vue';
import HowItWork from '@/components/HowItWork.vue';
import FAQ from '@/components/FAQ/FAQ.vue';

</script>

<style lang="scss" module>

.main {
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}
</style>